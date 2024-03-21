import { SendEmailDTO } from "@/validators/emailValidators";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const sendEmail = createAsyncThunk(
  "core/sendEmail",
  async (data: SendEmailDTO) => {
    return fetch(`/api/mail`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        return;
      })
      .catch(() => {
        toast.error("Something went wrong...");
      });
  }
);

export const coreActionsAsync = {
  sendEmail,
};
