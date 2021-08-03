import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCategorieDto, UpdateCategorieDto } from '../dtos/categorie.dto';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    
    @Get()
    get() {
        return this.categoriesService.findAll()
    }

    @Get('/:id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.findOne(id);
    }

    @Post()
    post(@Body() payload: CreateCategorieDto) {
        return this.categoriesService.create(payload);
    }

    @Put('/:id') 
    put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategorieDto){
        return this.categoriesService.update(id, payload);
    }

    @Delete('/:id') 
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.remove(id);
    }
}
