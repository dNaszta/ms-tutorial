import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as config from 'config'

@Injectable()
export class BasketService {
  basketHttp: string;
  constructor(private http: HttpService) {
    this.basketHttp = process.env.BASKET_HTTP || config.get('proxies.basket')
  }

  addToBasket(id: number, productId: number): Promise<AxiosResponse<any>> {
    return this.http.patch(
      `http://${this.basketHttp}/basket/user/${id}/add/${productId}`,
    ).toPromise()
  }

  getBasket(id: number): Promise<AxiosResponse<any>> {
    return this.http.get(
      `http://${this.basketHttp}/basket/user/${id}`,
    ).toPromise()
  }
}