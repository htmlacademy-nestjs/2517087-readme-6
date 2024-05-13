import dayjs from "dayjs";
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import {
  ConflictException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';

import {UserInfoEntity, UserInfoRepository} from '@project/user-info';
import {CreateUserDto} from "../dto/create-user.dto";
import { Token, User, UserRole } from '@project/shared/core';
import { jwtConfig } from '@project/user-config';
import { createJWTPayload } from '@project/shared/helpers';

import {LoginUserDto} from "../dto/login-user.dto";
import { RefreshTokenService } from '../refresh-token-module/refresh-token.service';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG
} from './authentication.constant';

@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  constructor(
    private readonly userInfoRepository: UserInfoRepository,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY) private readonly jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenService: RefreshTokenService,
  ) { }

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

  public async createUserToken(user: User): Promise<Token> {
    const accessTokenPayload = createJWTPayload(user);
    const refreshTokenPayload = { ...accessTokenPayload, tokenId: crypto.randomUUID() };
    await this.refreshTokenService.createRefreshSession(refreshTokenPayload);

    try {
      const accessToken = await this.jwtService.signAsync(accessTokenPayload);
      const refreshToken = await this.jwtService.signAsync(refreshTokenPayload, {
        secret: this.jwtOptions.refreshTokenSecret,
        expiresIn: this.jwtOptions.refreshTokenExpiresIn
      });

      return { accessToken, refreshToken };

    } catch (error) {
      this.logger.error('[Token generation error]: ' + error.message);
      throw new HttpException('Ошибка при создании токена.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserByEmail(email: string) {
    const existUser = await this.userInfoRepository.findByEmail(email);

    if (! existUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return existUser;
  }
}
