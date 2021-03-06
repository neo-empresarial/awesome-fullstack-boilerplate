import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './classes/user.class';
import { CreateUserDto } from './dto/create-user.dto';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all users.' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one specific user.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
