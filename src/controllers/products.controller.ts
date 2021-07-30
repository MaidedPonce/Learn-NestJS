import { Controller, Get, Param, Post, Query, Body, Put, Delete, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from 'src/services/product.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto'
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
       /* return {
            message: `producst limit=>${limit} offset=> ${offset} brand=>${brand}`
        }*/
        return this.productService.findAll()
    }

    @Get('/filter')
    getProductsFilter() {
        return `Soy un filter`
    }

    @Get('/:productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getProductId(@Param('productId', ParseIntPipe) productId: number) {
      /*  response.status(200).send({
            message: `product ${productId}`
        })*/
        return this.productService.findOne(productId)
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
      /*  return {
            message: 'accion de crear',
            payload
        }*/
        return this.productService.create(payload)
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
        return this.productService.update(id, payload)
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(+id);
    }
}
