import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { CustomerService } from '../services/customers.service'
@Controller('customers')
export class CustomersController {
    constructor(private customerServices: CustomerService) {}

    @Get()
    getAll() {
        return this.customerServices.findAll()
    }

    @Get('/:id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.customerServices.findOne(id);
    }

    @Post()
    post(@Body() payload: CreateCustomerDto) {
        return this.customerServices.create(payload);
    }

    @Put('/:id')
    put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
        return this.customerServices.update(id, payload);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.customerServices.remove(id);
    }
}
