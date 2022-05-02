import { Icarrousel } from './../../../entidades/carrousel.interface';
import { CarrouselService } from './carrousel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  carrousels: Icarrousel[] = [];

  constructor(
    private CarrouselService: CarrouselService
    
  ) { }

  ngOnInit(): void {

    this.obtenerCarrousel();
   
  }

  private obtenerCarrousel(){

    this.CarrouselService.ObtenerCarrousel().subscribe(
      (data) =>{

        this.carrousels = data;
        
      }
    )
  }

}
