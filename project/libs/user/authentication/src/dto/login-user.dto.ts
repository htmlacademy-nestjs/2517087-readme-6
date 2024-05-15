import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { AuthenticationValidateMessage } from '../authentication-module/authentication.constant';

export class LoginUserDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru'
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  @IsNotEmpty()
  @IsString()
  public password: string;
}
