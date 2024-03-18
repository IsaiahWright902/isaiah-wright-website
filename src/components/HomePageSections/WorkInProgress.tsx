"use client";

import { Button, Typography } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { coreSelectors } from "@/store/CoreState/selector";
export default function WorkInProgress() {
  const useLightMode = useSelector(coreSelectors.useLightMode);

  const handleClick = () => {
    toast.success("Email sent successfully!");
  };

  return (
    <SectionContainer title="This Site is a Work In Progress :)">
      <Typography>
        I am currently working on this site daily in order to get it finished.
        Check back every once in a while to see new sections & functionality.
      </Typography>
      <Button onClick={handleClick}>Test</Button>
    </SectionContainer>
  );
}
