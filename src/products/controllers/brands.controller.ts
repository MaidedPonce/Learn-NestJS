import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { BrandService } from '../services/brand.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
constructor(private brandService: BrandService) {}


    @Get()
    @ApiOperation({ summary: 'List of products'})
    get(){
        return this.brandService.findAll();
    }

    @Get('/:id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.brandService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateBrandDto) {
        return this.brandService.create(payload);
    }

    @Put(':id')
    put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto) {
        return this.brandService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param(':id', ParseIntPipe) id: number) {
        return this.brandService.remove(+id)
    }
}
