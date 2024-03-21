import { withHandler } from "@/utils/api-utils";
import { SendEmailDTO } from "@/validators/emailValidators";
import { NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail";
import { GetReplyHTML } from "@/utils/eamil-utils";

export const POST = await withHandler<SendEmailDTO>(
  async (request, requestBody) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: "icwright902@gmail.com",
      from: "icwright902@gmail.com",
      subject: requestBody.subject,
      text: requestBody.message,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent to icwright902@gmail.com");
      })
      .catch((err: any) => {
        throw new Error(err);
      });

    const replyMsg = {
      to: requestBody.email,
      from: "icwright902@gmail.com",
      subject: `Thanks for your submission ${requestBody.name}!`,
      html: GetReplyHTML(requestBody.name),
    };

    sgMail
      .send(replyMsg)
      .then(() => {
        console.log(`Reply email sent to ${requestBody.email}`);
      })
      .catch((err: any) => {
        throw new Error(`Could not send reply message to ${requestBody.email}`);
      });

    return NextResponse.json({});
  }
);
