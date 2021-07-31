import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'M&M',
      image: 'https://1000marcas.net/wp-content/uploads/2020/02/logo-MMs.png',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with ${id} doesn't exists`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId = +1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };

    return newBrand;
  }

  update(id: number, changes: UpdateBrandDto) {
    const brand = this.findOne(id);

    const index = this.brands.findIndex((item) => item.id === id);

    this.brands[index] = {
      ...brand,
      ...changes,
    };
    return this.brands[index];
  }
  
}
