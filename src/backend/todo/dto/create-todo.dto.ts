import Joi from 'joi';

export const createTodoSchema = Joi.object({
  content: Joi.string().required(),
});

export class CreateTodoDto {
  content: string;
}
