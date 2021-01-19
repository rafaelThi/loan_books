import {
  Column, Entity, PrimaryGeneratedColumn, Generated, ManyToOne, JoinColumn,
} from 'typeorm';
import Admin from './Admin';

@Entity('admin_tokens')
class TokenAdmin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  id_admin: string;

  @ManyToOne(() => Admin)
  @JoinColumn({ name: 'id_admin' })
  IdAdmin: Admin
}
export default TokenAdmin;
