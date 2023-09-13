import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User.entity';

@Entity({ name: 'profile' })
export default class Profile {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ type: 'text' })
  src: string;

  @ManyToOne(() => User, (user) => user.profiles)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
