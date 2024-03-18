import { withHandler } from "@/utils/api-utils";
import { NextRequest, NextResponse } from "next/server";

type EmailContent = {
  subject: string;
  text: string;
};

export const POST = await withHandler<EmailContent>(
  async (request, requestBody) => {
    console.log(requestBody);

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "icwright902@gmail.com", // Change to your recipient
      from: "icwright902@gmail.com", // Change to your verified sender
      subject: requestBody.subject,
      text: requestBody.text,
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
