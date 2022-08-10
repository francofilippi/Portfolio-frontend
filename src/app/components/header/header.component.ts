import { Component, OnInit } from '@angular/core';
import Typewriter from './Typewriter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

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
