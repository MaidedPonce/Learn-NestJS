import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie } from '../entities/categorie.entity';
import { CreateCategorieDto, UpdateCategorieDto } from '../dtos/categorie.dto';
@Injectable()
export class CategoriesService {
    private counterId = 1;
    private categories: Categorie[] = [
        {
            id: 1,
            type: 'clothes'
        }
    ]

    findAll() {
        return this.categories;
    }

    findOne(id: number) {
        const categorie = this.categories.find(item => item.id === id);
        if(!categorie) {
            throw new NotFoundException(`Categorie with ${id} not found`)
        }
        return categorie;
    }

    create(categorieData: CreateCategorieDto) {
        this.counterId =+1
        const newCategorie = {
            id: this.counterId,
            ...categorieData
        }
        this.categories.push(newCategorie)

        return newCategorie;
    }
    update(id: number, categorieData: UpdateCategorieDto) {
        const categorie = this.findOne(id);
        const index = this.categories.findIndex(item => item.id === id);

        this.categories[index] = {
            ...categorie,
            ...categorieData
        }
        return this.categories[index]
    }

    remove(id: number){
        const categorie = this.categories.findIndex(item => item.id === id);
        if(categorie == -1){
            throw new NotFoundException(`Categorie #${id} not found`)
        }

        this.categories.splice(categorie, 1);
        return true;
    }
}
