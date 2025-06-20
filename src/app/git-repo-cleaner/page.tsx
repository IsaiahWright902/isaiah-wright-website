"use client";
import PageContainer from "@/components/PageContainer/PageContainer";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import GitCleanerScreenShot from "@public/GIthubRepoCleaner.png"

export default function GithubRepoCleaner() {
    return (
        <PageContainer
            title="Github Repo Cleaner"
            description="A simple tool to bulk delete old or unused repositories from your GitHub account.
            Authentication is handled via GitHub SSO using a GitHub OAuth App that you configure."
        >
            <Grid container spacing={4} pb={4}>

                <Grid item xs={12} spacing={1}>
                    <Typography>
                        Like a lot of devs, I love exploring new ideas and technologies by jumping into code.
                        The result? A ton of Git repos.
                        At one point, I had over 140—most of them tiny proof-of-concepts or half-baked experiments.
                    </Typography>
                </Grid>
                <Grid item xs={12} spacing={1}>
                    <Typography>
                        One day I decided to clean house... and hit a wall.
                        GitHub only lets you delete repos one at a time? Who has the time for that?
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography>
                        So, I built a tool to fix it.
                        It lets you log in with GitHub SSO, fetch all your repositories, select the ones you no longer need, and delete them in bulk. Simple as that.
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Image
                        src={GitCleanerScreenShot}
                        alt="Git repo screenshot"
                        width={0}
                        height={0}
                        style={{
                            overflow: "hidden",
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography>
                        This was a super fun project to put together, and I'm excited to share it.
                        If you're curious about how it works under the hood, hit the button below to dive into the details. Happy repo cleaning!
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Button size="medium" href="https://github.com/IsaiahWright902/github-repo-cleaner" target="_blank" variant="contained">Visit Repo</Button>
                </Grid>

            </Grid>
        </PageContainer>
    )
}
