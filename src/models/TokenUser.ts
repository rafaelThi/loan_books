import {
  Column, Entity, PrimaryGeneratedColumn, Generated, ManyToOne, JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('user_tokens')
class TokenUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  id_user: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'id_user' })
  IdUser: User
}
export default TokenUser;
