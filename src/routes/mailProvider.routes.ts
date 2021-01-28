import { Router } from 'express';
import MailProvider from '../services/MailProviderService';

const routerMailProvider = Router();

// const sendmailController = new SendMailController();

routerMailProvider.post('/send-mail-recover-password', async (request, response) => {
  const { email } = request.body;
  // rever o corpo
  try {
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
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
});

routerMailProvider.post('/send-mail-request-book', async (request, response) => {
  console.log(request.body);
  const {
    email, name_user, name_book, id,
  } = request.body;
  // rever o corpo
  try {
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
  } catch (error) {
    throw new Error(error);
  }
});

routerMailProvider.post('/send-mail-request-return-accept', async (request, response) => {
  const {
    nameBook, nameUser, nameAdmin, emailUser, emailAdmin, textAccept,
  } = request.body;
  try {
    const messageMail = {
      title: 'Status da requsição do livro',
      body: `O livro, ${nameBook}, que foi requisitado por você, ${nameUser} foi aceito para
      emprestimo pelo ${nameAdmin}.
      Como vai ser?
      ${textAccept}
    `,
    };

    const mailProvider = new MailProvider();

    const sendMailUser = await mailProvider.execute({
      email: emailUser,
      messageMail,
    });

    const sendMailAdmin = await mailProvider.execute({
      email: emailAdmin,
      messageMail,
    });
    return response.json({ sendMailUser, sendMailAdmin });
  } catch (error) {
    throw new Error(error);
  }
});

routerMailProvider.post('/send-mail-request-return-refuse', async (request, response) => {
  const {
    nameBook, nameUser, emailUser, emailAdmin, textRefuse,
  } = request.body;
  try {
    const messageMail = {
      title: 'Status da requsição do livro',
      body: `O livro, ${nameBook}, que foi requisitado por você, ${nameUser} foi recusado para
      emprestimo :(, sinto muito, mas caso queira, pode tentar uma nova solicitação!
      Motivo da recusa: ${textRefuse}
    `,
    };

    const mailProvider = new MailProvider();

    const sendMailUser = await mailProvider.execute({
      email: emailUser,
      messageMail,
    });

    const sendMailAdmin = await mailProvider.execute({
      email: emailAdmin,
      messageMail,
    });
    return response.json({ sendMailUser, sendMailAdmin });
  } catch (error) {
    throw new Error(error);
  }
});
export default routerMailProvider;
