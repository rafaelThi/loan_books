import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import Book from './Book';
import User from './User';
import Admin from './Admin';

@Entity('requestsbooks')
class RequestBook {
@PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  id_book: string;

@ManyToOne(() => Book, { eager: true })
@JoinColumn({ name: 'id_book' })
IdBook: Book

@Column()
id_user: string;

  @ManyToOne(() => User, { eager: true })
@JoinColumn({ name: 'id_user' })
IdUser: User

  @Column()
  id_admin: string;

  @ManyToOne(() => Admin, { eager: true })
@JoinColumn({ name: 'id_admin' })
IdAdmin: Admin
}

export default RequestBook;
