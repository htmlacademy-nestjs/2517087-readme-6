import { Expose, Type } from "class-transformer";
import { BlogPostRdo } from "./blog-post.rdo";
import { ApiProperty } from "@nestjs/swagger";

export class BlogPostWithPaginationRdo {
  @ApiProperty({
    description: 'List of found posts',
    example: [{
      "id": "7c3328fc-0472-4b70-8029-2e46b725a4d8",
      "type": "Video",
      "title": "Test",
      "status": "Draft",
      "authorId": "661022d3615ce5c3c722054f",
      "tags": [
        "test_tag"
      ],
      "likes": [],
      "dateCreate": "2024-04-19T11:29:11.202Z",
      "dateUpdate": "2024-04-19T11:29:11.202Z",
      "comments": [
        {
          "id": "44149d99-a160-4b81-83b6-49fe0671b6fb",
          "postId": "7c3328fc-0472-4b70-8029-2e46b725a4d8",
          "authorId": "661022d3615ce5c3c722054f",
          "message": "Test comment text",
          "dateCreate": "2024-04-19T16:45:44.741Z"
        }
      ]
    }]
  })
  @Expose()
  @Type(() => BlogPostRdo)
  public entities: BlogPostRdo[];

  @ApiProperty({
    description: 'Number pages pagination',
    example: 5
  })
  @Expose()
  public totalPages: number;

  @ApiProperty({
    description: 'Total records found',
    example: 45
  })
  @Expose()
  public totalItems: number;

  @ApiProperty({
    description: 'Current page',
    example: 2
  })
  @Expose()
  public currentPage: number;

  @ApiProperty({
    description: 'Maximum records per page',
    example: 10
  })
  @Expose()
  public itemsPerPage: number;
}
