import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserPublicInfoRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '82'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Number user subscriber',
    example: 37
  })
  @Expose()
  public subscribers: number;

  @ApiProperty({
    description: 'Number user posts',
    example: 10
  })
  @Expose()
  public postsCount: number;

  @ApiProperty({
    description: 'User registration date (ISO format)',
    example: '2024-05-12'
  })
  @Expose()
  public registrationDate: string;
}
