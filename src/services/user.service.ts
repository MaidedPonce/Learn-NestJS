import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from '../entities/user.entity'
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto'
@Injectable()
export class UserService {
    private counterId = 1;
    private users: Users[] = [
        {
        id: 1,
        name: 'Maided Ponce',
        email: 'maided@gmail.com',
        password: '1234'
    }
]
    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(userId => userId.id === id)
        if(!user) {
            throw new NotFoundException(`User with ${id} doesn't exist`)
        }
        return user;
    }
    create(payload: CreateUserDto){
        this.counterId =+1;
        const newUser = {
            id: this.counterId,
            ...payload
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, payload: UpdateUserDto) {
        const user = this.findOne(id)

            const index = this.users.findIndex(userIde => userIde.id === id);

            this.users[index] = {
                ...user,
                ...payload
            };

            return this.users[index];
    }
    remove(id: number){
        const user = this.users.findIndex(item => item.id === id);
        this.users.slice(user);
    }
}
