import { IsNotEmpty, IsString } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The email of users' })
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}

export class UpateUserDto extends PartialType(CreateUserDto) {}