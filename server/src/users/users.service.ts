import { Injectable } from '@nestjs/common';
import { User } from './classes/user.class';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users[id];
  }
}
