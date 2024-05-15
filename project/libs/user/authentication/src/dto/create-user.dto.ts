import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { AuthenticationValidateMessage, NameLength, PasswordLength } from "../authentication-module/authentication.constant";

export class CreateUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@user.local'
  })
  @IsNotEmpty()
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Alexey',
    minimum: NameLength.Min,
    maximum: NameLength.Max
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(NameLength.Min)
  @MaxLength(NameLength.Max)
  public firstname: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(NameLength.Min)
  @MaxLength(NameLength.Max)
  public lastname: string;

  @ApiProperty({
    description: 'User avatar id',
    example: '423sb9f25dac3408417blk2s',
  })
  @IsOptional()
  @IsMongoId()
  @IsString()
  public avatarId?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
    minimum: PasswordLength.Min,
    maximum: PasswordLength.Max
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(PasswordLength.Min)
  @MaxLength(PasswordLength.Max)
  public password: string;
}
