import { uuid } from 'uuidv4';

class Admin {
  id: string;

  fullNameAdmin: string;

  emailAdmin: string;

  passwordAdmin: string;

  constructor(fullNameAdmin: string, emailAdmin: string, passwordAdmin: string) {
    this.id = uuid();
    this.fullNameAdmin = fullNameAdmin;
    this.emailAdmin = emailAdmin;
    this.passwordAdmin = passwordAdmin;
  }
}

export default Admin;
