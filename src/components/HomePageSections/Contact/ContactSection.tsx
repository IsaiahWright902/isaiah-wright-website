"use client";

import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SendEmailDTO, sendEmailValidator } from "@/validators/emailValidators";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { coreActions } from "@/store/CoreState/reducer";
import { useAppDispatch } from "@/store/store";

export default function ContactSection() {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<SendEmailDTO>({
    defaultValues: {
      toEmail: "",
      subject: "",
      message: "",
      name: "",
    },
    resolver: zodResolver(sendEmailValidator),
  });

  const onSubmit = (data: SendEmailDTO) => {
    // post here
    console.log(data);

    dispatch(coreActions.sendEmail(data));
  };

  return (
    <SectionContainer
      title="Contact Me"
      subtitle="Like what you see? Get in contact today!"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("name")}
              helperText={errors.name?.message}
              error={!!errors.name?.message}
              fullWidth
              variant="standard"
              label="Name"
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("toEmail")}
              helperText={errors.toEmail?.message}
              error={!!errors.toEmail?.message}
              fullWidth
              variant="standard"
              label="Email"
              placeholder="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("subject")}
              helperText={errors.subject?.message}
              error={!!errors.subject?.message}
              fullWidth
              variant="standard"
              label="Subject"
              placeholder="Subject"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("message")}
              helperText={errors.message?.message}
              error={!!errors.message?.message}
              fullWidth
              variant="outlined"
              label="Message"
              placeholder="Message"
              multiline
              rows={10}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <Button onClick={handleSubmit(onSubmit)} variant="outlined">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </SectionContainer>
  );
}
