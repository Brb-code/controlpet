import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  apiurl:string = 'una direccion';
  constructor() { }
  inicioSesion(tk:string){
    sessionStorage.setItem('CONTROLPET_tk', tk);
    location.href='veterinario'
  }
}
