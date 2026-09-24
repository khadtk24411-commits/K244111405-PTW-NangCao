import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../classes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private _url: string = "Dataset/products.json";

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url);
  }
}