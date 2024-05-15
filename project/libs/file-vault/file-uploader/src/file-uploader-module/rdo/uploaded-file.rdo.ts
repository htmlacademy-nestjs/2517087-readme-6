import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UploadedFileRdo {
  @ApiProperty({
    description: 'Uniq fileId',
    example: '213s57ceb6456744113aow21'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Original name file',
    example: 'photo_2024-05-14_12-23-13.jpg'
  })
  @Expose()
  public originalName: string;

  @ApiProperty({
    description: 'Hash name file',
    example: 'el2130d7-055b-4086-8874-4ac0a818372t.jpeg'
  })
  @Expose()
  public hashName: string;

  @ApiProperty({
    description: 'File vault dir',
    example: '2024/05'
  })
  @Expose()
  public subDirectory: string;

  @ApiProperty({
    description: 'File type',
    example: 'image/jpeg'
  })
  @Expose()
  public mimetype: string;

  @ApiProperty({
    description: 'File size',
    example: 312152,
  })
  @Expose()
  public size: number;

  @ApiProperty({
    description: 'Full path to the file',
    example: '/home/alex/Документы/Repository/2517087-readme-6/project/apps/file-vault/uploads/2024/05/el2130d7-055b-4086-8874-4ac0a818372t.jpeg',
  })
  @Expose()
  public path: string;
}
