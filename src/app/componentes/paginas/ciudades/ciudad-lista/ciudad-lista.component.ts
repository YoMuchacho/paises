import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../../servicios/servicio-pais/pais.service';
import { Pais } from 'src/app/componentes/modelos/pais';

@Component({
  selector: 'app-ciudad-lista',
  templateUrl: './ciudad-lista.component.html',
  styleUrls: ['./ciudad-lista.component.css']
})
export class CiudadListaComponent implements OnInit {
  paises: Pais[] = [];

  constructor(private paisServicio: PaisService) { }

  ngOnInit(): void {
    this.consultarPaises();
  }

  consultarPaises(){
    this.paisServicio.consultarPaises().subscribe((respuesta: any) => {
      this.paises = respuesta;
      console.log(this.paises);
    })
  }
}
