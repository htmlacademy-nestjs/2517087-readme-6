import { compare, genSalt, hash } from 'bcrypt';

import { AuthUser, Entity, StorableEntity } from '@project/shared/core';

import { SALT_ROUNDS } from './user-info.constant';

export class UserInfoEntity extends Entity implements StorableEntity<AuthUser> {
  email: string;
  firstname: string;
  lastname: string;
  avatarId?: string;
  avatar?: string;
  registrationDate: Date;
  passwordHash: string;
  subscribers: string[];

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.avatarId = user.avatarId;
    this.registrationDate = user.registrationDate || new Date();
    this.passwordHash = user.passwordHash;
    this.subscribers = user.subscribers ?? [];
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      avatarId: this.avatarId,
      subscribers: this.subscribers,
      registrationDate: this.registrationDate,
      passwordHash: this.passwordHash
    }
  }

  public async setPassword(password: string): Promise<UserInfoEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);

    return this;
  }

  public setAvatar(avatar: string) {
    this.avatar = avatar;

    return this;
  }

  public updateSubscribers(authorId: string) {
    if (this.subscribers.includes(authorId)) {
      this.subscribers = this.subscribers.filter(subscriberId => subscriberId !== authorId);
    } else {
      this.subscribers.push(authorId);
    }

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
