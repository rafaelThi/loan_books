import { Router } from 'express';
import MailProvider from '../services/MailProviderService';

const routerMailProvider = Router();

// const sendmailController = new SendMailController();

routerMailProvider.post('/send-mail-recover-password', async (request, response) => {
  const { email } = request.body;
  // rever o corpo
  const messageMail = {
    title: 'Recuperação de senha',
    body: `Recuperação de senha para o email: ${email}`,
  };

  const mailProvider = new MailProvider();

  const sendMail = await mailProvider.execute({
    email,
    messageMail,
  });

  return response.json(sendMail);
});

routerMailProvider.post('/send-mail-request-book', async (request, response) => {
  console.log(request.body);
  const {
    email, name_user, name_book, id,
  } = request.body;
  // rever o corpo
  const messageMail = {
    title: 'Requisição de um livro',
    body: `O livro, ${name_book}, foi requisitado pelo usuario: ${name_user}.
    O numero do pedido é: ${id}
    `,
  };

  const mailProvider = new MailProvider();

  const sendMail = await mailProvider.execute({
    email,
    messageMail,
  });

  return response.json(sendMail);
});

export default routerMailProvider;
