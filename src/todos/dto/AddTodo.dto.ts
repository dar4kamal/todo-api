import { IsNotEmpty } from 'class-validator';

export default class AddTodoDTO {
  @IsNotEmpty({ message: 'Todo Content is required' })
  content: string;
}
