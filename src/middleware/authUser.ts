import { Request, Response, NextFunction } from 'express';
// import { verify } from 'jsonwebtoken';
// import auth from '../config/auth';

// interface ITokenPayLoad {
//   iat: number;
//   exp: number;
//   sub: string;
// }

export default function authUser(request: Request, response: Response, next: NextFunction): void {
  const authHeaders = request.headers.authorization;
  // buscando o token do header da requisição

  if (!authHeaders) {
    // validando a existencia do Token
    throw new Error(`JWT token is missing, Erro: ${authHeaders}`);
  }
  // desestruturando o token
  const token = authHeaders;
  try {
    // verificando o token recebido com o que tem na memorias
    // isso faz com que o matchToken seja desse formato

    request.user = {
      id: token,
    };
    // declarando um novo tipod express, isso funciona junto do src/@types/express.d.ts
    // console.log(token);
    return next();
  } catch (err) {
    throw new Error(`JWT token is missing, Erro: ${err}`);
  }
}
