import { IsAlpha, IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterAuthDto {
  @IsAlpha()
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(7)
  password: string;
}
