import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1990-02-22',
  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Alex',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'User Password',
    example: 'Querty123'
  })
  public password: string;
}
