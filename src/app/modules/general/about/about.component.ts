import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  filteredString : string = ''
  query :any
  Sort:any = '1'
  //productsArray = [
   // { productID: 1, productName: 'Laptop', productPrice: 50000, productDesc: 'A Laptop', productImg: 'assets/images/laptop.jpg' },
   // { productID: 2, productName: 'iPhone', productPrice: 100000, productDesc: 'A iPhone', productImg: 'assets/images/phone.jpg' },
   // { productID: 3, productName: 'desk', productPrice: 1500, productDesc: 'A desk', productImg: 'assets/images/desk.jpg' }
  //]

  products:any = []
  constructor(private productService:ProductService)
  {
    this.productService.getProductInfo().subscribe(
      result=> this.products=result,
      error=>console.log(error)
  )}

}
