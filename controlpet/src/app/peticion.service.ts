import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  baseUrl='https://rickandmortyapi.com/api'
  constructor() { }
  obtener(url:string){
    return fetch(this.baseUrl+url)
  }
}
