import { IsNotEmpty, IsString } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    readonly isCtr: boolean;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}