import { FichaService } from './ficha.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IFicha } from 'src/app/entidades/ficha.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  id!: number;
  ficha!: IFicha;
  

  constructor(

    private route:ActivatedRoute,
    private fichaService:FichaService
    
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.obtenerficha();
  }

  obtenerficha(){

    this.fichaService.getOne(this.id).subscribe(
      (data)=>{
        this.ficha=data;
      }
    )
  }
}
