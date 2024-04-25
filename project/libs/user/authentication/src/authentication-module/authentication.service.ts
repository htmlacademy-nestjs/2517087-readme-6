import { Injectable } from '@nestjs/common';

import { UserInfoRepository } from '@project/user-info';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userInfoRepository: UserInfoRepository
  ) {}
}
