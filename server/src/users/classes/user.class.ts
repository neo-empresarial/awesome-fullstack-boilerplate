import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty({ example: '1', description: 'User identification number.' })
    id: number;

    @Column()
    @ApiProperty({ example: 'Pedro', description: 'User first name.' })
    firstName: string;

    @Column()
    @ApiProperty({ example: 'Kretzschmar', description: 'User last name.' })
    lastName: string;

    @Column()
    @ApiProperty({ example: '23', description: 'User age.' })
    age: number;

}
