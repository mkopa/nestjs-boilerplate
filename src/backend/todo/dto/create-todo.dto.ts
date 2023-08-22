import Joi from 'joi';

export const createTodoSchema = Joi.object({
  todo: Joi.string().required(),
});

export class CreateTodoDto {
  todo: string;
}
