import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authAdmin from '../config/authAdmin';

interface ITokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export default function authAdminMiddle(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeadersAdmin = request.headers.authorization;
  // buscando o token do header da requisição

  if (!authHeadersAdmin) {
    // validando a existencia do Token
    throw new Error(`JWT token is missing, Erro: ${authHeadersAdmin}`);
  }
  // desestruturando o token
  const [, token] = authHeadersAdmin.split(' ');
  try {
    // verificando o token recebido com o que tem na memorias
    const matchAdminToken = verify(token, authAdmin.jwt.secret);

    const { sub } = matchAdminToken as ITokenPayLoad;
    // isso faz com que o matchToken seja desse formato

    request.admin = {
      id: sub,
    };
    // declarando um novo tipod express, isso funciona junto do src/@types/express.d.ts
    console.log(matchAdminToken);
    return next();
  } catch (err) {
    throw new Error(`JWT token is missing, Erro: ${err}`);
  }
}
