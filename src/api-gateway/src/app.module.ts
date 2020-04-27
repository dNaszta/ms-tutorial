import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatalogService } from './catalog/catalog.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [CatalogService],
})
export class AppModule {}
