import { User, TokenPayload } from '@project/shared/core';

export function createJWTPayload(user: User): TokenPayload {
  return {
    id: user.id,
    email: user.email,
    lastname: user.lastname,
    firstname: user.firstname,
  };
}
