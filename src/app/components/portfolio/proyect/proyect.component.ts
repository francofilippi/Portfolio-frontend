import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyect } from '../interface/proyect';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  /*
    CHANGEDETECTION O DETECCION DE CAMBIOS: es el mecanismo o estrategia de deteccion de cambios para saber cuando debe actualizar un componente o toda la vista en caso de que la data haya cambiado.
        Estos cambios pueden ser eventos del mouse, llamadas ajax, setInterval, setTimeOut entre otros, que harán que angular vuelva a revisar
        la data si el changeDetection esta en Default. Si está en onPush, nosotros le decimos a angular cuando revisar y actualizar la data.
        onPush: Establece la estrategia en CheckOnce (bajo demanda, nosotros se lo especificamos)
        Default: establece la estrategia en CheckAlways (siempre que haya un cambio o evento, revisa la data y actualiza)
        En este caso como es un componente dummy que solo cambia cuando la data cambia, es buena práctica establecerlo en onPush para ganar performance. No hace falta que angular revise si cambió algo durante los eventos.
  */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProyectComponent implements OnInit {

  // Decorador @Input() sirve para comunicar Data desde un componente padre a un componente hijo
  @Input() proyecto!: Proyect;

  @Output() addToFavoritesClick = new EventEmitter<Proyect>() // Creo un evento personalizado y lo exporto como output
  // Decorador @Output() sirve para comunicar Data desde un componente hijo a un componente padre

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('click', this.proyecto);
    this.addToFavoritesClick.emit(this.proyecto)
  }

}
