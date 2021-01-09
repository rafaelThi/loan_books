import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import UserRepository from '../Repositories/UsersRepository';

interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ fullName, email, password }: IUserRequest): Promise<User> {
    const userRepo = getCustomRepository(UserRepository);

    const findEmail = await userRepo.findByEmailUser(email);
    if (findEmail) {
      throw new Error(`Email: "${email}" já cadastrado`);
    }

    const hashPass = await hash(password, 8);
    const user = userRepo.create({
      fullName,
      email,
      password: hashPass,
    });

    await userRepo.save(user);

    delete user.password;
    return user;
  }
}

export default CreateUserService;
