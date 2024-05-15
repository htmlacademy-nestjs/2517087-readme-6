import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { TokenPayload } from '@project/shared/core';

export class UserPayloadRdo implements TokenPayload {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '15'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Alex'
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @Expose()
  public lastname: string;
}

