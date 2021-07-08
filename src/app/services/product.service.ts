import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:any = 'assets/product.json' //local
  //url:string = ''; //network RESTful
  constructor(private http:HttpClient) { }
  getProductInfo(){
     return this.http.get(this.url)
  }
}
