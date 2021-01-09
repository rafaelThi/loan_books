import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admins')
class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullNameAdmin: string;

  @Column()
  emailAdmin: string;

  @Column()
  passwordAdmin?: string;
}

export default Admin;
