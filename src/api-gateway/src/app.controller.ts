import { Controller, Get } from '@nestjs/common';
import { CatalogService } from './catalog/catalog.service';

@Controller()
export class AppController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get("product")
  getProducts() {
    return this.catalogService.getAllProduct();
  }
}
