import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';
import { CreatePostDto } from './create-post.dto';
import { MAX_POST_LINK_LENGTH } from '@project/blog-post';

export class CreateLinkPostDto extends CreatePostDto {
  @ApiProperty({
    description: 'Post quote text',
    example: 'Some quote post text'
  })
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  public link: string;

  @ApiProperty({
    description: 'Post quote author',
    example: 'Some quote post author'
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(MAX_POST_LINK_LENGTH)
  public description: string;
}
