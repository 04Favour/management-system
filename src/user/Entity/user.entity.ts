/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';
import { Role } from 'src/enum/role.enum';

@Entity()
export class User extends Base {
  @Column()
  email: string;

  @Column()
  password: string;

  // role: string;
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.user,
  })
  role: Role;
}
