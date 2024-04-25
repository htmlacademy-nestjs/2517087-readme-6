import dayjs from "dayjs";
import {ConflictException, Injectable} from '@nestjs/common';

import {UserInfoEntity, UserInfoRepository} from '@project/user-info';
import {CreateUserDto} from "../dto/create-user.dto";
import {UserRole} from "@project/shared/core";

import {AUTH_USER_EXISTS} from "./authentication.constant";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userInfoRepository: UserInfoRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, dateBirth} = dto;

    const blogUser = {
      email, firstname, lastname, role: UserRole.User,
      avatar: '', dateOfBirth: dayjs(dateBirth).toDate(),
      passwordHash: ''
    };

    const existUser = await this.userInfoRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserInfoEntity(blogUser)
      .setPassword(password)

    return this.userInfoRepository
      .save(userEntity);
  }
}
