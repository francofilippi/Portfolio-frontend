import { Component, OnInit } from '@angular/core';
import { Favorites } from '../favorites.service';
import Typewriter from './Typewriter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantity$ = this.favoritesSvc.quantityAction$;
  total$ = this.favoritesSvc.totalAction$;
  favs$ = this.favoritesSvc.favAction$;

  constructor(private favoritesSvc: Favorites) { }

  ngOnInit(): void {

    let holaFranco: HTMLElement = document.getElementById("HolaFranco") as HTMLElement
    let typewriter = new Typewriter(holaFranco as HTMLElement, { loop: false })

    let frontendDev: HTMLElement = document.getElementById("FrontendDev") as HTMLElement
    let typewriter2 = new Typewriter(frontendDev as HTMLElement, { loop: false })

    typewriter
      .typeString("Hola, ")
      .pauseFor(200)
      .typeString("soy Franco")
      .start()

    typewriter2
      .pauseFor(1500)
      .typeString("Front-End Developer")
      .pauseFor(800)
      .deleteAll(30)
      .typeString("Bienvenido a mi sitio !")
      .start()

  }


}
