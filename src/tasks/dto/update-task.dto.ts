import Joi from 'joi';

export const updateTaskSchema = Joi.object({
  id: Joi.number().required(),
  done: Joi.boolean().required(),
});
export class UpdateTaskDto {
  id: number;
  done: boolean;
}
