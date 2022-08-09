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
  darkMode = false;

  navigation: links[] = [
    { name: 'header', path: '/header' },
    { name: 'about', path: '/about' },
    { name: 'portfolio', path: '/portfolio' },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.remove('dark')
      this.darkMode = false
    } else {
      document.documentElement.classList.add('dark')
      this.darkMode = true
    }
  }
}
