import {compare, genSalt, hash} from "bcrypt";

import { Entity } from '@project/shared/core';
import { StorableEntity, AuthUser, UserRole} from '@project/shared/core';

import {SALT_ROUNDS} from "./user-info.constant";

export class UserInfoEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public firstname: string;
  public lastname: string;
  public dateOfBirth: Date;
  public role: UserRole;
  public passwordHash: string;

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
    this.dateOfBirth = user.dateOfBirth;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      dateOfBirth: this.dateOfBirth,
      role: this.role,
      passwordHash: this.passwordHash,
    }
  }

  public async setPassword(password: string): Promise<UserInfoEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
