import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../../database/postgres';
import { UserTypes } from './user.types';

@Injectable()
export class UserService {
  constructor(@Inject(SEQUELIZE) private readonly sequelize: Sequelize) {}

  async getUserByEmail(email: string): Promise<UserTypes | null> {
    const [user] = await this.sequelize.query<UserTypes>('select * from users where email= :email limit 1', {
      type: QueryTypes.SELECT,
      replacements: { email },
    });

    return user ?? null;
  }

  async getUserById(id: number): Promise<UserTypes | null> {
    const [user] = await this.sequelize.query<UserTypes>('select * from users where email= :email limit 1', {
      type: QueryTypes.SELECT,
      replacements: { id },
    });

    return user ?? null;
  }
}
