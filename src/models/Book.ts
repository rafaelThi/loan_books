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
  amount: number;

  @Column()
  owner_id: string;

  @ManyToOne(() => Admin)
  @JoinColumn({ name: 'owner_id' })
    owner: Admin;
}

export default Book;
