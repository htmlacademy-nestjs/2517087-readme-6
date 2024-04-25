import {Injectable} from "@nestjs/common";

import { BaseMemoryRepository } from '@project/data-access';
import { UserInfoEntity } from './user-info.entity';
import { UserInfoFactory } from './user-info.factory';

@Injectable()
export class UserInfoRepository extends BaseMemoryRepository<UserInfoEntity> {
  constructor(entityFactory: UserInfoFactory) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<UserInfoEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);

    if (! user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
