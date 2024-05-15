import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsString, } from "class-validator";

export class CreateSubscribeDto {
  @ApiProperty({
    description: 'Author entity id',
    example: '312lb9f25dac3408417ir12s'
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  public authorId?: string;
}
