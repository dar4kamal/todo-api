import { Body, Controller, Get, Post } from '@nestjs/common';

import AddTodoDTO from './dto/AddTodo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Post()
  addOne(@Body() todoDetails: AddTodoDTO) {
    return this.todoService.addOne(todoDetails);
  }
}
