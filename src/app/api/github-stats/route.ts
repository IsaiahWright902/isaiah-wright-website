import { NextResponse } from "next/server";

const GITHUB_USERNAME = "IsaiahWright902";

function buildHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export async function GET() {
  const headers = buildHeaders();
  // Use /events (all) with a token, /events/public without
  const eventsEndpoint = process.env.GITHUB_TOKEN
    ? `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`
    : `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`;

  try {
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
        headers,
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        { next: { revalidate: 3600 }, headers }
      ),
      fetch(eventsEndpoint, { next: { revalidate: 3600 }, headers }),
    ]);

    const user = await userRes.json();
    const repos: any[] = await reposRes.json();
    const events: any[] = await eventsRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)
      : 0;

    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const commitsThisWeek = Array.isArray(events)
      ? events
          .filter(
            (e) =>
              e.type === "PushEvent" &&
              new Date(e.created_at).getTime() > oneWeekAgo
          )
          .reduce((sum, e) => sum + (e.payload?.commits?.length ?? 0), 0)
      : 0;

    return NextResponse.json({
      publicRepos: user.public_repos ?? 0,
      totalStars,
      commitsThisWeek,
    });
  } catch {
    return NextResponse.json(
      { publicRepos: 0, totalStars: 0, commitsThisWeek: 0 },
      { status: 500 }
    );
  }
}
