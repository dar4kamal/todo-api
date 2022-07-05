import { Controller, Get } from '@nestjs/common';

import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }
}
