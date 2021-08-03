import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { Product } from '../entities/products.entity'
@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [
        {
            id: 1,
            name: 'Playera',
            description: 'Playera negra solo en talla chica',
            price: 100,
            image: 'https://http2.mlstatic.com/D_NQ_NP_616145-MLM41070015116_032020-O.webp'
        }
    ]

    findAll () {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(item => item.id === id);
        if(!product) {
            throw new NotFoundException(`Product with ${id} not found`)
        }
        return product;
    }

    create(productData: CreateProductDto) {
        this.counterId =+ 1;
        const newProduct = {
            id: this.counterId,
            ...productData
        }

        this.products.push(newProduct);
        return newProduct
    }

    update(id: number, productData: UpdateProductDto) {
        const product = this.findOne(id);
        const index = this.products.findIndex(item => item.id === id);

        this.products[index] = {
            ...product,
            ...productData
        }
        return this.products[index]
    }

    remove(id: number) {
        const product = this.products.findIndex(item => item.id === id);
        if(product === -1) {
            throw new NotFoundException(`Product #${id} not found`)
        }

        this.products.splice(product, 1);

        return true;
    }
}
