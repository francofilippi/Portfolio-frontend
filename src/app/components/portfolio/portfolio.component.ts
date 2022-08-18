import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Favorites } from '../favorites.service';
import { Proyect } from './interface/proyect';
import { ProyectsService } from './services/proyects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  proyectos!: Proyect[]

  constructor(private proyectSvc: ProyectsService, private favoritesSvc: Favorites) { }

  ngOnInit(): void {
    this.proyectSvc.getProyects()
      .pipe(
        tap((proyectos: any) => this.proyectos = proyectos.results)
      )
      .subscribe() // Para consumir el observable
  }

  addToFavorites(proyecto: Proyect): void {
    console.log('Added to favorites', proyecto);
    this.favoritesSvc.updateFavs(proyecto)
  }
}
