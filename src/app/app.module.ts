import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadDetalleComponent } from './componentes/paginas/ciudades/ciudad-detalle/ciudad-detalle.component';
import { CiudadListaComponent } from './componentes/paginas/ciudades/ciudad-lista/ciudad-lista.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadDetalleComponent,
    CiudadListaComponent,
    HeaderComponent
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
