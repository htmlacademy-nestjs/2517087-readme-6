import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/data-access';

import { UserInfoEntity } from './user-info.entity';
import { UserInfoFactory } from './user-info.factory';
import { UserInfoModel } from './user-info.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserInfoRepository extends BaseMongoRepository<UserInfoEntity, UserInfoModel> {
  constructor(
    entityFactory: UserInfoFactory,
    @InjectModel(UserInfoModel.name)
    userInfoModel: Model<UserInfoModel>
  ) {
    super(entityFactory, userInfoModel);
  }

  public async findByEmail(email: string): Promise<UserInfoEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
