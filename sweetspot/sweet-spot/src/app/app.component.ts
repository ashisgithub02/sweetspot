import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { SignUpPageComponent } from "./MyComponents/sign-up-page/sign-up-page.component";
import { LoginPageComponent } from "./MyComponents/login-page/login-page.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { HomePageComponent } from "./MyComponents/home-page/home-page.component";
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { GoogleMapsModule } from '@angular/google-maps';
import {OrderTrackPageComponent} from './MyComponents/order-track-page/order-track-page.component';
import { ManageLocationsComponent } from './MyComponents/manage-locations/manage-locations.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignUpPageComponent, LoginPageComponent, NavbarComponent, HomePageComponent, FooterComponent, GoogleMapsModule, OrderTrackPageComponent,CommonModule,NgIf,ManageLocationsComponent]
})
export class AppComponent {
  title = 'sweet-spot';
}
