import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../interface/proyect';

// Un SERVICE no es mas que una capa que añadimos para manejar los datos. Es un proveedor de datos, que mantiene lógica de acceso y lógica de negocio.
// Los services serán consumidos por los componentes, y tendrán la responsabilidad de acceder a la información y de manipularla.

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private APIURL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  // Un OBSERVABLE es un flujo de datos en el tiempo. Los observables representan una colección de futuros valores o datas. Parecido a las promises.
  getProyects(): Observable<any> {
    return this.http.get<any>(this.APIURL)
  }
}
