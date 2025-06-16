import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { User } from '../../decorators/user';
import { UserDto } from './dto';
import { UserService } from './user.service';
import { UserTypes } from './user.types';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({ summary: 'Чтение профиля пользователя' })
  @ApiOkResponse({ type: UserDto })
  @Get('/profile')
  async getProfile(@User() user: UserTypes) {
    return user;
  }

  @ApiOperation({ summary: 'Чтение пользователя по id' })
  @Get('/:id')
  async getUserById(@Param('id', new ParseIntPipe()) id: number) {
    return this.service.getUserById(id);
  }
}
