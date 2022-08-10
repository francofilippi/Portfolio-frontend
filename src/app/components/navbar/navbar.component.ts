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

  localStorageTheme: string | null = localStorage.getItem('theme')

  navigation: links[] = [
    { name: 'home', path: 'home' },
    { name: 'sobre mi', path: '#about' },
    { name: 'portfolio', path: 'portfolio' },
  ]

  constructor() { }

  ngOnInit(): void {


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (this.localStorageTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.localStorageTheme = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      this.localStorageTheme = 'light'
      localStorage.setItem('theme', 'light')
    }

  }

  setNavbarOpen(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDarkMode(): void {
    if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
      this.localStorageTheme = 'light'
      document.documentElement.classList.remove('dark')
    } else if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      this.localStorageTheme = 'dark'
    }
  }
}
