import { Injectable } from '@angular/core';

@Injectable({      // service injectable
  providedIn: 'root'  // injecter dans toute l'application
})
export class ProductService {
  products = [
    {id:1 ,title: 'Product 1', price: 100, Quantity: 10, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
    {id:2,title: 'Product 2', price: 200, Quantity: 5, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
    {id:3 ,title: 'Product 3', price: 300, Quantity: 2, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
  ]
  constructor() { }
}
