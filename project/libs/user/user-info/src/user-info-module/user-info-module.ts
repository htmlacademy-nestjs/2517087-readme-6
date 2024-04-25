import { Module } from '@nestjs/common';

import { UserInfoRepository } from './user-info.repository';
import { UserInfoFactory } from './user-info.factory';

@Module({
  providers: [UserInfoRepository, UserInfoFactory],
  exports: [UserInfoRepository],
})
export class UserInfoModule {}
