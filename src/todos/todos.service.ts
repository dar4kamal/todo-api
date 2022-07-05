import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { Todo } from './todos.schema';
import AddTodoDTO from './dto/AddTodo.dto';
import UpdateTodoDTO from './dto/UpdateTodo.dto';

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

  async updateOne(todoId: string, todoDetails: UpdateTodoDTO) {
    const { content, done } = todoDetails;

    try {
      const updatedTodo = await this.todoModel.findOneAndUpdate(
        { _id: todoId },
        {
          ...(done !== undefined && { done }),
          ...(content !== undefined && { content }),
        },
        { upsert: true, new: true },
      );
      return updatedTodo;
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException();
    }
  }

  async removeOne(todoId: string) {
    try {
      const removedTodo = await this.todoModel.findOneAndDelete({
        _id: todoId,
      });
      return removedTodo;
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException();
    }
  }
}
