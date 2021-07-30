import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller'
import { BrandsController } from './controllers/brands.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { BrandService } from './services/brand.service';

@Module({
  imports: [],
  controllers: [AppController, BrandsController, CustomersController, UsersController, OrdersController, ProductsController],
  providers: [AppService, ProductService, UserService, BrandService],
})
export class AppModule {}