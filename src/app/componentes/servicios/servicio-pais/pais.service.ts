import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Pais } from '../../modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  consultarPaises(){
    const url = `${environment.baseUrl}all`
    return this.http.get<Pais[]>(url)
  }  
}
