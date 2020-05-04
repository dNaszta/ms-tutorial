import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as config from 'config'

@Injectable()
export class ProductService {
  catalogHttp: string;

  constructor(private http: HttpService) {
    this.catalogHttp = process.env.CATALOG_HTTP || config.get('proxies.catalog')
  }

  getAllProduct(): Promise<AxiosResponse<any>> {
    return this.http.get(`http://${this.catalogHttp}/`).toPromise();
  }

  getProductById(id: number): Promise<AxiosResponse<any>> {
    return this.http.get(`http://${this.catalogHttp}/${id}`).toPromise();
  }
}
