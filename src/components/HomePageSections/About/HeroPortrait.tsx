"use client";

import { Box, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import UpdatedHeadShot from "@public/updatedHeadshot.jpg";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

/** The headshot in a ring of the visitor's color, with a soft wash of that color behind it. */
export default function HeroPortrait() {
  const userColor = useAppSelector(coreSelectors.userColor);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 270, sm: 330, md: 400 },
        aspectRatio: "1 / 1",
        mx: "auto",
        borderRadius: "50%",
        border: `2px solid ${userColor}`,
        overflow: "hidden",
        background: `radial-gradient(circle at 30% 25%, ${alpha(userColor, 0.22)}, transparent 65%)`,
      }}
    >
      <Stack sx={{ height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image
          src={UpdatedHeadShot}
          alt="Isaiah Wright"
          priority
          width={0}
          height={0}
          sizes="400px"
          style={{ clipPath: "circle()", overflow: "hidden", width: "74%", height: "auto" }}
        />
      </Stack>
    </Box>
  );
}
