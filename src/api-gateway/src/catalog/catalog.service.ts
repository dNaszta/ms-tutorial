import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CatalogService {
  constructor(private http: HttpService) {
  }

  async getAllProduct() {
    return this.http.get(`http://localhost:8388/`)
      .pipe(map(response => response.data));
  }
}
