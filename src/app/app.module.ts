import { FichaComponent } from './application/ficha/ficha.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './application/home/home.component';
import { NosotrosComponent } from './application/nosotros/nosotros.component';
import { CarrouselComponent } from './application/home/carrousel/carrousel.component';
import { BannerComponent } from './application/home/banner/banner.component';
import { CategoriasComponent } from './application/home/categorias/categorias.component';
import { ArticulosComponent } from './application/articulos/articulos.component';
import { ArticuloComponent } from './application/articulos/articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    CarrouselComponent,
    BannerComponent,
    CategoriasComponent,
    ArticulosComponent,
    ArticuloComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
