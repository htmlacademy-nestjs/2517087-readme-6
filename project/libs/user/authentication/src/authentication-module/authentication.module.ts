import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UserInfoModule } from "@project/user-info";
import { getJwtOptions } from '@project/user-config';
import { NotifyModule } from '@project/user-notify';

import { JwtAccessStrategy } from '../strategies/jwt-access.strategy';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from '../strategies/local.strategy';
import { JwtRefreshStrategy } from '../strategies/jwt-refresh.strategy';
import { RefreshTokenModule } from '../refresh-token-module/refresh-token.module';
import { HttpModule } from '@nestjs/axios';
import { HttpClient } from '@project/api-config';

@Module({
  imports: [
    UserInfoModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    NotifyModule,
    RefreshTokenModule,
    HttpModule.register({
      timeout: HttpClient.Timeout,
      maxRedirects: HttpClient.MaxRedirects,
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtAccessStrategy,
    LocalStrategy,
    JwtRefreshStrategy,
  ]
})
export class AuthenticationModule {}
