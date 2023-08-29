import Joi from 'joi';

export const createTaskSchema = Joi.object({
  content: Joi.string().required(),
});

export class CreateTaskDto {
  content: string;
}
