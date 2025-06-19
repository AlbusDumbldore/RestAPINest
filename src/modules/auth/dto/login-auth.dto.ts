import { PickType } from '@nestjs/swagger';
import { UserRegisterDto } from './register-auth.dto';

export class UserLoginDto extends PickType(UserRegisterDto, ['email', 'password']) {}
