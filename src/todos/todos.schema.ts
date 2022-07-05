import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Todo extends Document {
  @Prop({ type: String, required: [true, 'Todo Content is required'] })
  content: string;

  @Prop({ type: Boolean, default: false })
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
