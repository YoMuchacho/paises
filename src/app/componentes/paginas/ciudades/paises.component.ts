import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pais } from '../../modelos/pais'

@Component({
  selector: 'app-paises',
  template: 
  `<div class="card mb-4 shadow-sm">
    <div class="image">
      <a [routerLink]="['#']">
        <img
          [src]="pais.flag"
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
        />
      </a>
    </div>
    
    <div class="card-body">
      <div class="header">
        <a [routerLink]="['#']">
          <h2>{{ pais.name }}</h2>
        </a>
        <h4> Capital: {{ pais.capital }}</h4>
        <h4> Region: {{ pais.region }}</h4>
        <h4> Indicativo: +{{ pais.callingCodes }}</h4>
      </div>
      <!--  <p class="card-text">Hola si</p> -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">Detalles</button>
          <!--
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          -->
        </div>
        <small class="text-muted">{{ pais.timezones }}</small>
      </div>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaisesComponent {
  @Input() pais: Pais;
}