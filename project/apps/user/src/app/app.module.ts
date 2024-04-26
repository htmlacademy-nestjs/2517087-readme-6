import { Module } from '@nestjs/common';
import { UserInfoModule } from "@project/user-info";
import { AuthenticationModule } from "@project/authentication";
import {UserConfigModule} from "@project/user-config";

@Module({
  imports: [ UserInfoModule, AuthenticationModule, UserConfigModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
