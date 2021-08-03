import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from 'src/products/dtos/products.dto';
import { CreateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity'
@Injectable()
export class CustomerService {
    private counterId = 1;
    private customers: Customer[] = [
        {
            id: 1,
            name: 'Andres Negro',
            email: 'biersackpapasote@gmail.com',
            password: 'esunpapasito123',
            isCtr: true
        }
    ]

    findAll() {
        return this.customers;
    }

    findOne(id: number) {
        const customer = this.customers.find(item => item.id === id);
        if(!customer) {
            throw new NotFoundException(`Customer with ${id} not found`);
        }
        return customer;
    }

    create(customerData: CreateCustomerDto) {
        this.counterId =+1;

        const newCustomer = {
            id: this.counterId,
            ...customerData
        }

        this.customers.push(newCustomer);
        return newCustomer;
    }

    update(id: number, customerData: UpdateProductDto) {
        const customer = this.findOne(id);
        const index = this.customers.findIndex(item => item.id === id);

        this.customers[index] = {
            ...customer,
            ...customerData
        }

        return this.customers[index];
    }

    remove(id: number) {
        const customer = this.customers.findIndex(item => item.id === id);

        if(customer === -1){
            throw new NotFoundException(`Customer with ${id} not found`);
        }

        this.customers.splice(customer, 1);
        return true;
    }
}
