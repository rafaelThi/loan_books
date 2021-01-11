import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import Book from './Book';
import User from './User';
import Admin from './Admin';

@Entity('requestBooks')
class RequestBook {
@PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  name_book: string;

@ManyToOne(() => Book)
@JoinColumn({ name: 'name_book' })
  nameBook: Book

@Column()
id_user: string;

  @ManyToOne(() => User)
@JoinColumn({ name: 'id_user' })
  user: User

  @Column()
  id_admin: string;

  @ManyToOne(() => Admin)
@JoinColumn({ name: 'id_admin' })
  admin: Admin
}

export default RequestBook;
