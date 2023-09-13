import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import Profile from './Profile.entity';

@Entity({ name: 'user' })
@Unique(['email'])
export default class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  intro: string;

  @OneToMany(() => Profile, (profile) => profile.user)
  profiles: Profile[];
}
