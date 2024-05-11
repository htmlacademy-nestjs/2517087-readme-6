import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserInfoModule } from "@project/user-info";
import { AuthenticationModule } from "@project/authentication";
import { UserConfigModule, getMongooseOptions } from "@project/user-config";
import { NotifyModule } from '@project/user-notify';

@Module({
  imports: [ UserInfoModule, AuthenticationModule, UserConfigModule, MongooseModule.forRootAsync(
      getMongooseOptions()
    ),
    NotifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
