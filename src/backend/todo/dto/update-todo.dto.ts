import Joi from 'joi';

export const updateTodoSchema = Joi.object({
  id: Joi.number().required(),
  done: Joi.boolean().required(),
});

export class UpdateTodoDto {
  id: number;
  done: boolean;
}
