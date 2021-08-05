import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/users.service';
import { ProductsModule } from '../products/products.module'
import { CustomerService } from './services/customers.service';
@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomersController],
  providers: [UserService, CustomerService],
})
export class UsersModule {}
