import Joi from 'joi';

export const removeTodoSchema = Joi.object({
  id: Joi.number().required(),
});

export class RemoveTodoDto {
  id: number;
}
