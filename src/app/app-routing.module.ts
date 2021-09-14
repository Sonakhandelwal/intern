import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"adminlogin" , component:AdminloginComponent},
  {path:"userlogin" , component:UserloginComponent},
  {path:"adminhome" , component:AdminhomeComponent},
  {path:"admincate" , component:AdmincategoryComponent},
  {path:"adminprod" , component:AdminproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
