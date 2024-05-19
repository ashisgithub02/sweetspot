import { RouterModule, Routes } from '@angular/router';
import { SignUpPageComponent } from "./MyComponents/sign-up-page/sign-up-page.component";
import { LoginPageComponent } from "./MyComponents/login-page/login-page.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { HomePageComponent } from "./MyComponents/home-page/home-page.component";
import { ShopPageComponent } from './MyComponents/shop-page/shop-page.component';
import { CartPageComponent } from './MyComponents/cart-page/cart-page.component';
import { CheckoutPageComponent } from './MyComponents/checkout-page/checkout-page.component';
import { PaymentGatewayComponent } from './MyComponents/payment-gateway/payment-gateway.component';
import { OrderTrackPageComponent } from './MyComponents/order-track-page/order-track-page.component';
import { NgModule } from '@angular/core';
import { ManageLocationsComponent } from './MyComponents/manage-locations/manage-locations.component';




export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'signup', component:SignUpPageComponent},
    {path:'shop', component:ShopPageComponent},
    {path:'cart', component:CartPageComponent},
    {path:'checkout', component:CheckoutPageComponent},    
    {path:'payment', component:PaymentGatewayComponent},
    {path:'tracking', component:OrderTrackPageComponent},
    {path:'locations', component:ManageLocationsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


