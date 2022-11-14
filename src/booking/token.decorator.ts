import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type TokenType = string;

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.token;
  },
);
