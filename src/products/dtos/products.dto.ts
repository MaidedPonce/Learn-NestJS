import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsUrl()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}