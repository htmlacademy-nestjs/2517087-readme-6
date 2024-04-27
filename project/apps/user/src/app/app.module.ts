import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserInfoModule } from "@project/user-info";
import { AuthenticationModule } from "@project/authentication";
import { UserConfigModule, getMongooseOptions } from "@project/user-config";

@Module({
  imports: [ UserInfoModule, AuthenticationModule, UserConfigModule, MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
