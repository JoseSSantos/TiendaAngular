import { Injectable } from '@angular/core';
import { Icarrousel } from 'src/app/entidades/carrousel.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(
    private http:HttpClient
  ) { }

  public ObtenerCarrousel(): Observable<Icarrousel[]>{

    return this.http.get<Icarrousel[]>('http://localhost:3001/carrousel');
    
  }
}
