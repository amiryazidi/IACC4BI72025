import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: "product" , component: HomeComponent},
  {path : "" , redirectTo: "product" , pathMatch: "full"},
  {path: "residence" , component: ResidenceComponent},
  {path: "login" , component: LoginComponent},
  {path: "detail/:id" , component: DetailProdComponent},
  {path :  "**" , component : NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
