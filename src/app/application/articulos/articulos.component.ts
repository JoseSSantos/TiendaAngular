import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { IArticulo } from './../../entidades/articulo.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  productos: IArticulo[] = [];
  categoria?: number;


  constructor(

    private route: ActivatedRoute,
    private ArticulosService: ArticulosService

  ) { }

  ngOnInit(): void {
    
    this.categoria = this.route.snapshot.params['id'];
    this.obtenerArticulos();
  }

  private obtenerArticulos(){

    if(this.categoria==1){
    this.ArticulosService.ObtenerZapatillas().subscribe(
      (data) =>{

        this.productos = data;
        
      }
    )}
  }

}
