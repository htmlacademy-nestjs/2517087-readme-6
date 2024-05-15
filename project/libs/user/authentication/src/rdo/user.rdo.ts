import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UploadedFileRdo } from '@project/file-uploader';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatarId: string;

  @Expose()
  @Type(() => UploadedFileRdo)
  public avatar: UploadedFileRdo

  @ApiProperty({
    description: 'User first name',
    example: 'Alexey'
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @Expose()
  public lastname: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'List author id which user subscribed',
    isArray: true,
    example: ['660eb9f25dac3408417b2da9', '660eb9f25dac3408417b2da9', '660eb9f25dac3408417b2da9']
  })
  @Expose()
  public subscribers: string[];

  @ApiProperty({
    description: 'User registration date (ISO format)',
    example: '2024-04-04'
  })
  @Expose()
  public registrationDate: string;
}
