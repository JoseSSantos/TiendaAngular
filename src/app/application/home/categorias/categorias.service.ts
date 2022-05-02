import { Injectable } from '@angular/core';
import { ICategoria } from 'src/app/entidades/categorias.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http:HttpClient
  ) { }

  public ObtenerCategorias(): Observable<ICategoria[]>{

    return this.http.get<ICategoria[]>('http://localhost:3001/categorias');
    
  }
}
