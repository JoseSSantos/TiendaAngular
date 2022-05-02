import { Component, Input, OnInit } from '@angular/core';
import { IArticulo } from 'src/app/entidades/articulo.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  @Input() item?: IArticulo;

  constructor() { }

  ngOnInit(): void {
  }

}
