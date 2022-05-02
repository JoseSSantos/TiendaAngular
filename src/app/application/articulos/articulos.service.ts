import { IFicha } from './../../entidades/ficha.interface';
import { Injectable } from '@angular/core';
import { IArticulo } from 'src/app/entidades/articulo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(
    private http:HttpClient
  ) { }


  public ObtenerZapatillas(): Observable<IArticulo[]>{

    return this.http.get<IArticulo[]>('http://localhost:3001/zapatillas');
    
  }
  public ObtenerAccesorios(): Observable<IArticulo[]>{

    return this.http.get<IArticulo[]>('http://localhost:3001/accesorios');
    
  }
  public ObtenerCamisas(): Observable<IArticulo[]>{

    return this.http.get<IArticulo[]>('http://localhost:3001/camisas');
    
  }
  public ObtenerPantalones(): Observable<IArticulo[]>{

    return this.http.get<IArticulo[]>('http://localhost:3001/pantalones');
    
  }
  public ObtenerSudaderas(): Observable<IArticulo[]>{

    return this.http.get<IArticulo[]>('http://localhost:3001/sudaderas');
    
  }
}
