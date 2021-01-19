import { compare } from 'bcryptjs';
import { getCustomRepository, getRepository } from 'typeorm';
// import { sign } from 'jsonwebtoken';
// import auth from '../config/auth';
import User from '../models/User';
import TokenUserRepository from '../Repositories/TokenUserRepository';

interface ISessionUser {
  email: string;
  password: string;
}

interface IUserAuth {
  user: User;
  token: string;
}

class SessionUser {
  public async execute({ email, password }: ISessionUser): Promise<IUserAuth> {
    const userRepo = getRepository(User);
    const tokenRepo = getCustomRepository(TokenUserRepository);

    const user = await userRepo.findOne({
      where: { email },
    });
    if (!user) {
      throw new Error('Usuário inválido');
    }
    const passMatch = await compare(password, user.password);
    if (!passMatch) {
      throw new Error('Usuário inválido');
    }

    const { token } = await tokenRepo.generate(user.id);

    console.log(token);
    // const token = sign({}, auth.jwt.secret, {
    //   subject: user.id,
    //   expiresIn: auth.jwt.expiresIn,
    // });
    return ({ user, token });
  }
}

export default SessionUser;
