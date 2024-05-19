import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  redirectToTrackOrder = () => {
    this.router.navigate(['track-order']);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

}
