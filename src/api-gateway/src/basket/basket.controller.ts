import { Controller, Param, ParseIntPipe, Patch, UseGuards, Get } from '@nestjs/common';
import { GetUserDecorator } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from '../product/product.service';
import { BasketService } from './basket.service';

@Controller('basket')
@UseGuards(AuthGuard())
export class BasketController {
  constructor(
    private readonly catalogService: ProductService,
    private readonly basketService: BasketService
  ) {}

  @Get("/")
  async getBasket(
    @GetUserDecorator() user: User
  ) {
    const basketRes = await this.basketService.getBasket(
      user.id
    );
    return basketRes.data;
  }

  @Patch("/add/:productId/request/:requestId")
  async addToBasket(
    @GetUserDecorator() user: User,
    @Param('productId', ParseIntPipe) productId: number,
    @Param('requestId') requestId: string
  ) {
    const basketRes = await this.basketService.addToBasket(
      user.id,
      productId,
      requestId);
    return basketRes.data;
  }
}
