import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NewsletterRdo {
  @ApiProperty({
    description: 'Date last mailing',
    example: new Date('2024-05-14')
  })
  @Expose()
  public lastMailingDate: Date;
}
