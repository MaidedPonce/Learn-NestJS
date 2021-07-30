import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dto'

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.findAll()
    }

    @Get(':id')
    getOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() paylodad: CreateUserDto) {
        return this.userService.create(paylodad)
    }

    @Put('id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto){
        return this.userService.update(id, payload)
    }

    @Delete('id')
    delete(@Param('id', ParseIntPipe) id: number) {
        this.userService.remove(id)
    }
}

