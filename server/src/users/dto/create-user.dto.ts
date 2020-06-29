import { IsEmpty, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmpty()
  @IsInt()
  @ApiProperty()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly age: number;
}
