import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly catalogService: ProductService,
  ) {}

  @Get("/")
  async getProducts() {
    const response = await this.catalogService.getAllProduct();
    return response.data;
  }

  @Get("/:id")
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    const response = await this.catalogService.getProductById(id);
    return response.data;
  }
}
