import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpateUserDto } from '../dtos/user.dto';
import { UserService } from '../services/users.service'
@Controller('users')
export class UsersController {
    constructor(private userServices: UserService) {}

    @Get()
    getAll() {
        return this.userServices.findAll()       
    }

    @Get('/:id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.findOne(id);
    }

    @Post()
    post(@Body() payload: CreateUserDto) {
        return this.userServices.create(payload);
    }

    @Put('/:id')
    put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpateUserDto) {
        return this.userServices.update(id, payload);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userServices.remove(id);
    }
}
