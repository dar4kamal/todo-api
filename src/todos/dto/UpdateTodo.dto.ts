import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export default class UpdateTodoDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'Todo Content is required' })
  content: string;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}
