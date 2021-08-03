import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/users.service';

@Module({
  imports: [],
  controllers: [UsersController, CustomersController],
  providers: [UserService, UserService],
})
export class UsersModule {}
