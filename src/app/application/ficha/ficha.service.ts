import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFicha } from 'src/app/entidades/ficha.interface';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  constructor(
    private http:HttpClient
  ) { }

  public getOne(id:number){

    return this.http.get<IFicha>('http://localhost:3001/'+id)

  }
}
