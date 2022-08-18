import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Proyect } from "./portfolio/interface/proyect";

@Injectable(
  { providedIn: 'root' }
)
export class Favorites {
  proyects: Proyect[] = [];

  private favSubject = new Subject<Proyect[]>();
  private totalFavSubject = new Subject<number>()
  private quantitySubject = new Subject<number>();

  get totalAction$(): Observable<number> {
    return this.totalFavSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get favAction$(): Observable<Proyect[]> {
    return this.favSubject.asObservable();
  }

  updateFavs(proyect: Proyect): void {
    this.addToFavs(proyect);
    this.quantityFavs();
    this.calcTotal();
  }

  private addToFavs(proyect: Proyect): void {
    this.proyects.push(proyect);
    this.favSubject.next(this.proyects);
  }

  private quantityFavs(): void {
    const quantity = this.proyects.length;
    this.quantitySubject.next(quantity)
  }

  private calcTotal(): void {
    const total = this.proyects.reduce((acc, proy) => acc += proy.id, 0);
    this.totalFavSubject.next(total);
  }

}
