import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import AddTodoDTO from './dto/AddTodo.dto';
import UpdateTodoDTO from './dto/UpdateTodo.dto';

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

  @Patch(':todoId')
  updateOne(
    @Param('todoId') todoId: string,
    @Body() todoDetails: UpdateTodoDTO,
  ) {
    return this.todoService.updateOne(todoId, todoDetails);
  }
}
