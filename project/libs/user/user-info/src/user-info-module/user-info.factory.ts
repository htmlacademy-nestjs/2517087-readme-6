import {Injectable} from "@nestjs/common";
import { AuthUser, EntityFactory } from '@project/shared/core';
import { UserInfoEntity } from './user-info.entity';
@Injectable()
export class UserInfoFactory implements EntityFactory<UserInfoEntity> {
  public create(entityPlainData: AuthUser): UserInfoEntity {
    return new UserInfoEntity(entityPlainData);
  }
}
