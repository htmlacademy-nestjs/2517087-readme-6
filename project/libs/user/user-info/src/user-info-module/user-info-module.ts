import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserInfoRepository } from './user-info.repository';
import { UserInfoFactory } from './user-info.factory';
import { UserInfoModel, UserInfoSchema } from './user-info.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserInfoModel.name, schema: UserInfoSchema }
    ])
  ],
  providers: [UserInfoRepository, UserInfoFactory],
  exports: [UserInfoRepository],
})
export class UserInfoModule {}
