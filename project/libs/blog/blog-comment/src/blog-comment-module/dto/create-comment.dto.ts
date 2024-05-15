import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { BlogCommentValidateMessage, CommentLength } from '../blog-comment.constant';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment text message',
    example: 'test message'
  })
  @IsString()
  @IsNotEmpty({ message: BlogCommentValidateMessage.MessageIsEmpty })
  @MinLength(CommentLength.Min, { message: BlogCommentValidateMessage.MessageLesserMin })
  @MaxLength(CommentLength.Max, { message: BlogCommentValidateMessage.MessageGreaterMax })
  public message: string;

  @ApiProperty({
    description: 'Comment author ID',
    example: '145214d3615ce5c3c722342l'
  })
  @IsString()
  @IsMongoId({ message: BlogCommentValidateMessage.InvalidID })
  public authorId: string;
}
