// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarUserComponent } from './layout/user-layout/navbar-user/navbar-user.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavbarUserComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // routes publiques (landing, features, how-it-works…)
  publicRoutes = ['/', '/features', '/how-it-works'];

  // routes où vous voulez la navbar “user”
  userRoutes = [
    '/user-space',
    '/user-home',
    '/inventory',
    '/scan-product',
    '/smart-fridge',
    '/recipes',
    '/share-food',
    '/user-profil'
  ];

  constructor(public router: Router) {}

  get showPublicNavbar() {
    return this.publicRoutes.includes(this.router.url);
  }

  get showUserNavbar() {
    return this.userRoutes.includes(this.router.url);
  }
}
