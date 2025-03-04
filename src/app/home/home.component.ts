import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title : string="4BI7"
  color!:string
  priceMax !:number
  products!:any

  constructor(private ps:ProductService){}


  ngOnInit(){
    this.products=this.ps.products
  }
  show(){
    alert('Hello')
  }
  buy(p:any){
    p.Quantity--;
  }
}
