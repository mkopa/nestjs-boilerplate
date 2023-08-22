import Joi from 'joi';

export const updateTodoSchema = Joi.object({
  id: Joi.number().required(),
  isDone: Joi.boolean().required(),
});

export class UpdateTodoDto {
  id: number;
  isDone: boolean;
}
