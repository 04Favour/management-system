/* eslint-disable prettier/prettier */
import { Base } from "../../user/Entity/baseEntity";
import { User } from "../../user/Entity/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
@Entity()
export class Todolist extends Base {
    @Column()
    title: string;
    @Column()
    description: string;
    
    @Column()
    userId: string;

    @ManyToOne(()=> User, (user)=> user.todo)
    user: User[]
}
