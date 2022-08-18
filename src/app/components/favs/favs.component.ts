import { Component, OnInit } from '@angular/core';
import { Favorites } from '../favorites.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  quantity$ = this.favoritesSvc.quantityAction$;
  total$ = this.favoritesSvc.totalAction$;
  favs$ = this.favoritesSvc.favAction$;

  constructor(private favoritesSvc: Favorites) { }

  ngOnInit(): void {

  }


}
