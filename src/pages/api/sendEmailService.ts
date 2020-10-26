import { NowRequest, NowResponse } from '@vercel/node';
import nodeMailer, { Transporter } from 'nodemailer';

import { MailRequestProps } from '../index';

function connectToEmailProvider(): Transporter {
  const transporter = nodeMailer.createTransport({
    host: process.env.HOST,
    port: Number(process.env.PORT),
    secure: false,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
}

async function sendEmail(emailData: MailRequestProps): Promise<unknown> {
  const transporter = connectToEmailProvider();

  const mailResponse = await transporter.sendMail({
    text: `${emailData.message} -> ${emailData.email}`,
    subject: emailData.subject,
    from: emailData.email,
    to: [process.env.AUTH_USER],
  });

  return mailResponse;
}

export default async (
  request: NowRequest,
  response: NowResponse,
): Promise<NowResponse> => {
  const data = request.body as MailRequestProps;

  await sendEmail(data);

  return response.json({ message: 'send!' });
};
