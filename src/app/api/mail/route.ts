import { withHandler } from "@/utils/api-utils";
import { SendEmailDTO } from "@/validators/emailValidators";
import { NextRequest, NextResponse } from "next/server";

export const POST = await withHandler<SendEmailDTO>(
  async (request, requestBody) => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "icwright902@gmail.com", // Change to your recipient
      from: "icwright902@gmail.com", // Change to your verified sender
      subject: requestBody.subject,
      text: requestBody.message,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("EMAIL SENT");
      })
      .catch((err: any) => {
        throw new Error(err);
      });

    return NextResponse.json({});
  }
);
