import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  product!:any


  constructor(private Act : ActivatedRoute, private ps:ProductService) { }
  id!:number

  ngOnInit(){
    this.id= this.Act.snapshot.params['id']
   this.product= this.ps.products.find((p:any)=>p.id==this.id)
  }

}
