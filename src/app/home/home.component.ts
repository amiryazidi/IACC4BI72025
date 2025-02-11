import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title : string="4BI7"
  color!:string
  priceMax !:number
  products = [
    {id:1 ,title: 'Product 1', price: 100, Quantity: 10, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
    {id:2,title: 'Product 2', price: 200, Quantity: 5, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
    {id:3 ,title: 'Product 3', price: 300, Quantity: 2, Like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bsms6abt1nm9eBu8h5tWRTO1ktL-NiCf9A&s'},
  ]

  show(){
    alert('Hello')
  }
  buy(p:any){
    p.Quantity--;
  }
}
