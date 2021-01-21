import { Router } from 'express';
import nodemailer from 'nodemailer';

const routerMailProvider = Router();

// const sendmailController = new SendMailController();

routerMailProvider.post('/send-mail', async (request, response) => {
  const { email, to } = request.body;
  nodemailer.createTestAccount().then(async (account) => {
    const transporter = await nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
    console.log(account);

    const client = await transporter;
    const message = await client.sendMail({
      from: 'Equipe Loan Books <rafael.pereira20@icloud.com>',
      to,
      subject: 'E-mail  ✔',
      text: `Corpo + ${email}`,
    });
    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  });

  return response.sendStatus(204);
});

export default routerMailProvider;
