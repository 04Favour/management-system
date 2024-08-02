import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';

@Module({
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}
