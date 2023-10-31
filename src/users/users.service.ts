import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.model';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createTask(title: string): User {
    const user: User = {
      id: uuid(),
      title,
      status: UserStatus.ACTIVE,
    };

    this.users.push(user);
    return user;
  }
}
