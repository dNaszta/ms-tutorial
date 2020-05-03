import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class BasketService {
  constructor(private http: HttpService) {
  }

  addToBasket(id: number, productId: number): Promise<AxiosResponse<any>> {
    return this.http.patch(
      `http://basket-php/basket/user/${id}/add/${productId}`,
    ).toPromise()
  }

  getBasket(id: number): Promise<AxiosResponse<any>> {
    return this.http.get(
      `http://basket-php/basket/user/${id}`,
    ).toPromise()
  }
}