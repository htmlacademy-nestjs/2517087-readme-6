import { Module } from '@nestjs/common';
import { UserInfoModule } from "@project/user-info";
import { AuthenticationModule } from "@project/authentication";

@Module({
  imports: [ UserInfoModule, AuthenticationModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
