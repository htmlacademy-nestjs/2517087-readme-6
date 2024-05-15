import { ApiProperty } from '@nestjs/swagger';
import { CommentRdo } from '@project/blog-comment';
import { Comment } from '@project/shared/core';
import { Expose, Type } from 'class-transformer';
import {PostStatus, PostType} from "@prisma/client";

export class BlogPostRdo {
  @ApiProperty({
    description: 'The uniq post ID',
    example: 'owqe61d0-0530-4cfc-98fa-4712838dkd21'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'original post',
    example: 'owqe61d0-0530-4cfc-98fa-4712838dkd21'
  })
  @Expose()
  public originalId: string;

  @ApiProperty({
    description: 'Post title',
    example: 'Guest'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Post types enum',
    enum: PostType,
    example: PostType.Text
  })
  @Expose()
  public type: PostType

  @ApiProperty({
    description: 'Post statuses enum',
    enum: PostStatus,
    example: PostStatus.Published
  })
  @Expose()
  public status: PostStatus;

  @ApiProperty({
    description: 'Post author ID',
    example: '661022d3615ce5c3c722054f'
  })
  @Expose()
  public authorId: string;

  @ApiProperty({
    description: 'original post author',
    example: '661022d3615ce5c3c722054f'
  })
  @Expose()
  public originaAuthorlId: string;

  @ApiProperty({
    description: 'Post tags list',
    isArray: true,
    example: ['new', 'tag', 'something']
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    description: 'Uniq list liked this post',
    isArray: true,
    example: ['661022d3615ce5c3c722054f', '66229f5a637123ebbe48b99b']
  })
  @Expose()
  public likes: string[];

  @ApiProperty({
    description: 'Flag whether post reposted',
    example: false
  })
  @Expose()
  public isReposted: boolean;

  @ApiProperty({
    description: 'Post creation date',
    example: new Date('2024-05-10')
  })
  @Expose()
  public dateCreate: Date;

  @ApiProperty({
    description: 'List of user comments to this post',
    isArray: true,
    example: [{
      "id": "d29938b2-094f-4cef-b639-e734f710d696",
      "postId": "21569a85-6b0e-4f5d-9528-a673f29c0b16",
      "authorId": "66215457a46f67b7a80f4e99",
      "message": "test1",
      "dateCreate": "2024-05-05T11:15:45.865Z"
    },
    {
      "id": "aabc0872-674b-4c17-aac1-1856bb070c7a",
      "postId": "21569a85-6b0e-4f5d-9528-a673f29c0b16",
      "authorId": "66215457a46f67b7a80f4e77",
      "message": "test 2",
      "dateCreate": "2024-05-05T05:06:35.391Z"
    }]
  })
  @Expose()
  @Type(() => CommentRdo)
  public comments: Comment[];

  @ApiProperty({
    description: 'Photo ID',
    example: '661022d3615ce5c3c722054f'
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'posts',
    example: 'test2.'
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'announcement',
    example: 'test announcement'
  })
  @Expose()
  public announcement: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'author name'
  })
  @Expose()
  public quoteAuthor: string;

  @ApiProperty({
    description: 'Link for a link post',
    example: 'https://htmlacademy.ru'
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Description field link post',
    example: 'description'
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Video',
    example: 'https://www.youtube.com/watch?v=0uqhAoMkFUc'
  })
  @Expose()
  public video: string;
}
