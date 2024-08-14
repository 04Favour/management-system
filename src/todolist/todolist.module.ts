import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todolist } from './entities/todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}
