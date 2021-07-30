import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get('categories/:id/products/:productsId')
    getCategory(
        @Param('id') productId: string,
        @Param('productsId') id: string) {
        return `${productId} and ${id}`
    }
}
