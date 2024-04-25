import {Injectable} from "@nestjs/common";

import { BaseMemoryRepository } from '@project/data-access';
import { UserInfoEntity } from './user-info.entity';
import { UserInfoFactory } from './user-info.factory';

@Injectable()
export class UserInfoRepository extends BaseMemoryRepository<UserInfoEntity> {
  constructor(entityFactory: UserInfoFactory) {
    super(entityFactory);
  }
}
