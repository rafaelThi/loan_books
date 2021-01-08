import User from '../models/User';
import UserRepository from '../Repositories/UsersRepository';

interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ fullName, email, password }: IUserRequest): User {
    const findEmail = this.userRepository.findByEmailUser(email);
    if (findEmail) {
      throw new Error(`Email: "${email}" já cadastrado`);
    }
    const user = this.userRepository.createUser({
      fullName,
      email,
      password,
    });
    return user;
  }
}

export default CreateUserService;
