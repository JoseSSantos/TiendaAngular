import { FichaComponent } from './application/ficha/ficha.component';
import { ArticulosComponent } from './application/articulos/articulos.component';
import { HomeComponent } from './application/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './application/nosotros/nosotros.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path: 'categoria/:id', component:ArticulosComponent},
  {path: 'articulo/:id', component:FichaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
