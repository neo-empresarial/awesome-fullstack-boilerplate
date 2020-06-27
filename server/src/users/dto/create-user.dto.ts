import { IsEmpty, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  @IsInt()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsInt()
  readonly age: number;
}
