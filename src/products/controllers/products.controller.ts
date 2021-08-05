import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ProductsService } from '../services/products.service'
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get() 
    getAll() {
        return this.productsService.findAll();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get product id'})
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    post(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload);
    }

    @Put('/:id')
    put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload);
    }

    @Delete('/:id') 
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.remove(id);
    }
}
