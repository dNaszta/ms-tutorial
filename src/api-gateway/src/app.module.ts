import { DynamicModule, HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductService } from './product/product.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketService } from './basket/basket.service';
import { BasketController } from './basket/basket.controller';
import { ProductController } from './product/product.controller';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.
  return TypeOrmModule.forRoot(typeOrmConfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HttpModule,
    AuthModule
  ],
  controllers: [AppController, BasketController, ProductController],
  providers: [ProductService, BasketService],
})
export class AppModule {}
