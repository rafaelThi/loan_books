import { uuid } from 'uuidv4';

class User {
  id: string;

  fullName: string;

  email: string;

  password: string;

  constructor(fullName: string, email: string, password: string) {
    this.id = uuid();
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
}
export default User;
