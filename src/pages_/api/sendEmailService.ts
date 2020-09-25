import { NowRequest, NowResponse } from '@vercel/node';
import nodeMailer, { Transporter } from 'nodemailer';

import mailConfig from '../../config/emailConfig';
import { MailRequestProps } from '../index';

function connectToEmailProvider(): Transporter {
  const transporter = nodeMailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: false,
    auth: {
      user: mailConfig.auth.user,
      pass: mailConfig.auth.pass,
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
    to: [mailConfig.auth.user],
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
