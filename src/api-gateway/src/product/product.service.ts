import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProductService {
  constructor(private http: HttpService) {
  }

  getAllProduct(): Promise<AxiosResponse<any>> {
    return this.http.get(`http://catalog-php/`).toPromise();
  }

  getProductById(id: number): Promise<AxiosResponse<any>> {
    return this.http.get(`http://catalog-php/${id}`).toPromise();
  }
}
