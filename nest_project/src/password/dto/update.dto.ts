import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class UpdatePassword {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string
}