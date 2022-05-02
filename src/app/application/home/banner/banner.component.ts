import { BannerService } from './banner.service';
import { Component, OnInit } from '@angular/core';
import { IBanner } from './../../../entidades/banner.interface';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: IBanner[] = [];

  constructor(

    private BannerService: BannerService
  ) { }

  ngOnInit(): void {

    this.obtenerBanners();
  }

  public obtenerBanners(){


    this.BannerService.Obtenerbanner().subscribe(
      (data) =>{

        this.banners = data;
        
      }
    )
  }

}
