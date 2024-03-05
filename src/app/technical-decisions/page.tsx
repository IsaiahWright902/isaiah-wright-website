"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { coreSelectors } from "@/store/CoreState/selector";
import UserColorDivider from "@/components/UserColorDivider/UserColorDivider";

export default function TechnicalDecisionsPage() {
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h1">Technical Decisions:</Typography>
        <Typography variant="body1">
          I&apos;ve dedicated a page on my site to dive into the gears turning
          behind my website with a dedicated page showcasing the innovative
          technologies in play. I&apos;ve outlined my picks, giving you a sneak
          peek into my decision-making process, offering a deeper understanding
          of how I think. Below, you&apos;ll find a categorized list of these
          technologies, along with the reasons behind my choices. Explore to see
          if we&apos;re navigating the tech landscape together!
        </Typography>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">Next.js:</Typography>
        <Stack spacing={2}>
          <Typography>
            When navigating the plethora of front-end frameworks, the choice
            greatly hinges on your specific goals. I opted for Next.js due to my
            familiarity with the framework, its excellent TypeScript support,
            and the convenience of automatic routing. This selection aligns
            seamlessly with my vision for an efficient and well-supported
            development environment.
          </Typography>
          <Typography>
            Next.js is not only powerful but also highly performant! When
            embarking on this project, speed and scalability were paramount
            considerations. Leveraging Next.js with its automatic code splitting
            has proven invaluable, ensuring swift execution of my application
            and delivering an optimal experience for you.
          </Typography>
          <Typography>
            I further opted for Next.js due to its App router and integrated API
            capabilities, allowing me to write both the application and API
            logic in the same language. Drawing from past experiences where the
            seamless sharing of types between the front-end and back-end proved
            to be an elegant solution, I was keen on replicating this
            efficiency.
          </Typography>
          <Typography>
            Although there isn&apos;t an API implemented at the moment, my
            strategic plan includes integrating numerous side projects within
            this site to showcase my evolving skill set. Next.js offers a solid
            foundation for this vision, providing the flexibility and
            ease-of-use needed to effortlessly build and expand upon these
            projects in the future. This foresight ensures a streamlined
            development process and consistent language throughout the
            application&apos;s architecture
          </Typography>
          <ViewDocsButton href="https://nextjs.org/" />
        </Stack>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">TypeScript:</Typography>
        <Stack spacing={2}>
          <Typography>
            Awe JavaScript, you are... weird. I still love you though!
          </Typography>
          <Typography>
            Every JavaScript developer has found themselves in that slightly
            messy spot, grappling with uncertainties about object properties,
            pondering whether a function can accept certain props, and
            questioning if the code will run smoothly. These challenges tend to
            accumulate over time, gradually impeding the development process.
          </Typography>
          <Typography>
            I opted for TypeScript to liberate myself from these issues and
            establish a more sustainable application. The introduction of static
            typing not only enhances our tooling and provides deeper insights
            into the code but also encourages the creation of inherently
            descriptive code. This shift minimizes guesswork, enabling
            developers to concentrate more on functionality. Beyond immediate
            benefits, the inclusion of types ensures a heightened level of
            sustainability for the codebase, making it more resilient and
            adaptable over time.
          </Typography>
          <Typography>
            I hold a deep affinity for TypeScript, favoring it over vanilla
            JavaScript. Through my professional journey, I&apos;ve observed
            projects unfold with a touch of elegance and efficiency when
            TypeScript takes the lead. As a developer, the presence of
            TypeScript instills a sense of confidence and clarity, fostering an
            environment where I feel more informed and empowered to tackle
            challenges head-on, making it a wonder choice for my personal
            website.
          </Typography>
          <ViewDocsButton href="https://www.typescriptlang.org/" />
        </Stack>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">Redux:</Typography>
        <Stack spacing={2}>
          <ViewDocsButton href="https://www.typescriptlang.org/" />
        </Stack>
        <UserColorDivider />
      </Stack>
    </Stack>
  );
}

function ViewDocsButton({ href }: { href: string }) {
  return (
    <Box>
      <Button
        href={href}
        target="_blank"
        variant="text"
        endIcon={<ArrowForwardIcon />}
      >
        View Docs
      </Button>
    </Box>
  );
}
