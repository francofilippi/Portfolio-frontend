import { Component, OnInit } from '@angular/core';

export interface links {
  name: string,
  path: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  navigation: links[] = [
    { name: 'header', path: '/header' },
    { name: 'about', path: '/about' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

}
