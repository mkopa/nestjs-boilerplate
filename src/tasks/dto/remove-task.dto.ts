import Joi from 'joi';

export const removeTaskSchema = Joi.object({
  id: Joi.number().required(),
});

export class RemoveTaskDto {
  id: number;
}
