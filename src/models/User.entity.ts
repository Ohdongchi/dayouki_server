import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
