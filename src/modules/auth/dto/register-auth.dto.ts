import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserRegisterDto {
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @ApiProperty({ example: 'Name Lastname' })
  public username: string;

  @IsEmail()
  @ApiProperty({ example: 'example@mail.com' })
  public email: string;

  @IsString()
  @MinLength(6)
  @Matches(/(?=.*\d)(?=.*[A-Z])/, {
    message: 'Пароль должен содержать хотя бы одну цифру и хотя бы одну заглавную букву',
  })
  @ApiProperty({
    example: 'StrongPassword1',
    description: 'Пароль должен быть не менее 6 символов, содержать хотя бы одну цифру и заглавную букву',
  })
  public password: string;
}
