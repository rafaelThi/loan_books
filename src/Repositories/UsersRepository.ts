import User from '../models/User';

interface IUser {
  fullName: string;
  email: string;
  password: string;
}

class UserRepository {
  private users:User[];

  constructor() {
    this.users = [];
  }

  public listAllUsers(): User[] {
    return this.users;
  }

  public findByEmailUser(emailUser: string): User | undefined {
    const findEmail = this.users.find((user:User) => user.email === emailUser);
    return findEmail;
  }

  public createUser({ fullName, email, password }: IUser): User {
    const user = new User(fullName, email, password);
    this.users.push(user);
    return user;
  }
}
export default UserRepository;
