import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment ID',
    example: 'sls21d0-1234-4cfc-98fa-4712838d9d96'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Post ID of this comment',
    example: '61d0-1234-4cfc-98fa-4712838d9d96'
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'Author ID of this comment',
    example: '663b6d0bf48517d912b1b267'
  })
  @Expose()
  public authorId: string;

  @ApiProperty({
    description: 'Comment text message',
    example: 'test message'
  })
  @Expose()
  public message: string;
}
