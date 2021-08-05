import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCategorieDto {
    @IsNotEmpty()
    readonly type: string;
}

export class UpdateCategorieDto extends PartialType(CreateCategorieDto) {}