import { NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandService {
    private counterId = 1;
    private brands: Brand[] = [
      {
        id: 1,
        name: 'M&M',
        image: 'https://pngimg.com/uploads/m_m/m_m_PNG47.png',
      },
    ];
  
    findAll() {
      return this.brands;
    }
  
    findOne(id: number) {
      const brand = this.brands.find((item) => item.id == id);
      if (!brand) {
        throw new NotFoundException(`Brand with ${id} not found`);
      }
      return brand;
    }
  
    create(brandData: CreateBrandDto) {
      this.counterId = +1;
      const newBrand = {
        id: this.counterId,
        ...brandData,
      };
      this.brands.push(newBrand);
      return newBrand;
    }
  
    update(id: number, brandData: UpdateBrandDto) {
      const brand = this.findOne(id);
      const index = this.brands.findIndex((item) => item.id === id);
  
      this.brands[index] = {
        ...brand,
        ...brandData,
      };
      return this.brands[index];
    }
  
    remove(id: number) {
      const brand = this.brands.findIndex((item) => item.id === id);
      if (brand === -1) {
        throw new NotFoundException(`Brand #${id} not found`);
      }
      this.brands.splice(brand, 1);
      return true;
    }
}
