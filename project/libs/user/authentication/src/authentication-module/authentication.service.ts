import dayjs from "dayjs";
import {ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {ConfigService, ConfigType} from '@nestjs/config';

import {UserInfoEntity, UserInfoRepository} from '@project/user-info';
import {CreateUserDto} from "../dto/create-user.dto";
import {UserRole} from "@project/shared/core";

import {AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG} from "./authentication.constant";
import {LoginUserDto} from "../dto/login-user.dto";
import {dbConfig} from "@project/user-config";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userInfoRepository: UserInfoRepository,

    private readonly configService: ConfigService, // для получения настроек модуля конфигурации
    @Inject(dbConfig.KEY)
    private readonly databaseConfig: ConfigType<typeof dbConfig>, // для получения настроек модуля конфигурации
  ) {
    // console.log(databaseConfig.user);
    // console.log(configService.get<string>('db.host'));
  }

  public async register(dto: CreateUserDto): Promise<UserInfoEntity> {
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

    this.userInfoRepository
      .save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.userInfoRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.userInfoRepository.findById(id);

    if (! user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    return user;
  }
}
