import User from '../models/User';

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

  public createUser(fullName: string, email: string, password: string): User {
    const user = new User(fullName, email, password);
    this.users.push(user);
    return user;
  }
}
export default UserRepository;
