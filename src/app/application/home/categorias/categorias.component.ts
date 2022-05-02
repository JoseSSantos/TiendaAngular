import { ICategoria } from './../../../entidades/categorias.interface';
import { CategoriaService } from './categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: ICategoria[]=[];

  constructor(

    private CategoriaService:CategoriaService
  ) { }

  ngOnInit(): void {

    this.obtenerCategorias();
  }


  private obtenerCategorias(){

    this.CategoriaService.ObtenerCategorias().subscribe(
      (data) =>{

        this.categorias = data;
        
      }
    )
  }
}
