import { Injectable } from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolist } from './entities/todolist.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/Entity/user.entity';


@Injectable()
export class TodolistService {
  // eslint-disable-next-line prettier/prettier
  constructor(@InjectRepository(Todolist) private readonly todoRepo: Repository<Todolist>){}

  async create(payload: CreateTodolistDto, user: User) {
    const todo = new Todolist();
    todo.userId = user.id;
    todo.title = payload.title;
    todo.description = payload.description;
    Object.assign(todo, payload);
    this.todoRepo.create(todo);
    return await this.todoRepo.save(todo);
  }

  findAll() {
    return `This action returns all todolist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todolist`;
  }

  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return `This action updates a #${id} todolist`;
  }

  remove(id: number) {
    return `This action removes a #${id} todolist`;
  }
}
