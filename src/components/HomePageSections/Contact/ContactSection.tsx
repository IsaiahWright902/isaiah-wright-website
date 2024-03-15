"use client";

import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { coreSelectors } from "@/store/CoreState/selector";
import { Button, Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function ContactSection() {
  const userColor = useSelector(coreSelectors.userColor);

  return (
    <SectionContainer
      title="Contact Me"
      subtitle="Like what you see? Get in contact today!"
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Name"
            placeholder="Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            placeholder="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="standard"
            label="Subject"
            placeholder="Subject"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            placeholder="Message"
            multiline
            rows={10}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center" alignItems="center">
          <Button variant="outlined">Send Message</Button>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
