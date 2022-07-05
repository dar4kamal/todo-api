import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Todo } from './todos.schema';
import AddTodoDTO from './dto/AddTodo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async getAll() {
    return await this.todoModel.find({});
  }

  async addOne(todoDetails: AddTodoDTO) {
    const { content } = todoDetails;
    const newTodo = new this.todoModel({ content });
    await newTodo.save();
    return newTodo;
  }
}
