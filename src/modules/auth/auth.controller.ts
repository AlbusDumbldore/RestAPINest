import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Регистрация нового пользователя' })
  async register(@Body() dto: RegisterAuthDto) {
    // const result = await this.authService.register(dto);
    // return result;
  }

  @Post('/login')
  public login() {}
}
