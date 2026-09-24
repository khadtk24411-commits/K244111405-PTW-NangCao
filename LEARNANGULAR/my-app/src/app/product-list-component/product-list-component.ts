import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products: Product[]=[
    {id:1, name:"laptop",price:999,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFWOm4Tl5MfHjzdjnwujq2ICU8UoLVcAB687qLVuisg&s=10"},
    {id:1, name:"laptop",price:999,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3n5lUKyqvcysxBfagRMZh-ClEOaTkzODVa10WIlYgw&s=10" },
    {id:1, name:"laptop",price:999,image:""},
     {id:1, name:"laptop",price:-999,image:""},
    {id:1, name:"laptop",price:-999,image:""},
    {id:1, name:"laptop",price:-99,image:""},
  ]
  trackProductId(index:number, product:Product):number {
    return product.id;

  }

}

