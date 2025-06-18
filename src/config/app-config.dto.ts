import { plainToInstance, Transform, Type } from 'class-transformer';
import { IsInt, IsNumber, IsString, ValidateNested } from 'class-validator';

export class ConfigSequelize {
  @IsNumber()
  @Type(() => Number)
  port: number;

  @IsString()
  host: string;

  @IsString()
  database: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class AppConfigDto {
  @IsInt()
  @Type(() => Number)
  port: number;
  //
  // @IsString()
  // redisUrl: string;

  // @IsString()
  // jwtSecretAccess: string;
  //
  // @IsString()
  // jwtSecretRefresh: string;

  @ValidateNested()
  @Transform(({ value }) => plainToInstance(ConfigSequelize, value))
  postgres: ConfigSequelize;
}
