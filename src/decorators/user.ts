import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithUser, UserTypes } from '../modules/user/user.types';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext): UserTypes => {
  const request = ctx.switchToHttp().getRequest<RequestWithUser>();

  return request.user;
});
