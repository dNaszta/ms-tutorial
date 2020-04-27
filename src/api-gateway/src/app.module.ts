import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatalogService } from './catalog/catalog.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HttpModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [CatalogService],
})
export class AppModule {}
