import { Injectable } from '@angular/core';
import { IBanner } from 'src/app/entidades/banner.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http:HttpClient
  ) { }

  public Obtenerbanner(): Observable<IBanner[]>{

    return this.http.get<IBanner[]>('http://localhost:3001/banners');
    
  }
}
