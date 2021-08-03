import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity'
@Injectable()
export class UserService {
    private counterId = 1;
    private users: User[] = [
        {
            id: 1,
            name: 'Maided UWU',
            email: 'maideddebiersack@gmail.com',
            password: 'maidedyelandresjuasjuas',
        }
    ]

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(item => item.id === id);
        if(!user) {
            throw new NotFoundException(`User with ${id} not found`)
        }
        return user;
    }

    create(userData: CreateUserDto) {
        this.counterId =+1;

        const newUser = {
            id: this.counterId,
            ...userData
        }

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, userData: UpateUserDto) {
        const user = this.findOne(id);
        const index = this.users.findIndex(item => item.id === id);

        this.users[index] = {
            ...user,
            ...userData
        }

        return this.users[index]
    }

    remove(id: number) {
        const user = this.users.findIndex(item => item.id === id);

        if(user === -1) {
            throw new NotFoundException(`User with ${id} not found`);
        }

        this.users.splice(user, 1);

        return true;
    }

}
