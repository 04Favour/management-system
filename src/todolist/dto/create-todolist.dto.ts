/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodolistDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
}
