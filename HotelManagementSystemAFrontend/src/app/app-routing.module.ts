import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AftersignupComponent } from './pages/aftersignup/aftersignup.component';
import { AdmincrudComponent } from './pages/admin/admincrud/admincrud.component';
import { UpdatecustomerComponent } from './pages/admin/updatecustomer/updatecustomer.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    //pathMatch:'full'
    canActivate: [],
    children:[
      {
        path:'admincrud',
        component:AdmincrudComponent,
      }
    ]
  },
  {
    path:'admincrud',
    component: AdmincrudComponent,
    pathMatch:'full'
  },
  {
    path:'updatecustomer/:id',
    component: UpdatecustomerComponent,
    pathMatch: 'full'
  },
  {
    path:'booking',
    component: BookingComponent,
    pathMatch:'full'
    },
  {
    path:'aftersignup',
    component: AftersignupComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
