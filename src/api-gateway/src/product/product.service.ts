import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProductService {
  constructor(private http: HttpService) {
  }

  getAllProduct(): Promise<AxiosResponse<any>> {
    return this.http.get(`http://localhost:8388/`).toPromise();
  }

  getProductById(id: number): Promise<AxiosResponse<any>> {
    return this.http.get(`http://localhost:8388/${id}`).toPromise();
  }
}
