import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamAndBody = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return { ...req.body, ...req.params };
  },
);
