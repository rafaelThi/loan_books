import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import Admin from './Admin';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  language: string;

  @Column()
  img: string;

  @Column()
  owner_id: string;

  @ManyToOne(() => Admin, { eager: true })
  @JoinColumn({ name: 'owner_id' })
    owner: Admin;
}

export default Book;
