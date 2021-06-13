import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  nombre:string='Juanito';
  hoy:any = Date.now();
  lista:any=[]
  constructor(private obt:PeticionService) { }

  ngOnInit(): void {
    this.listarPersonas()
  }
  guardar(event:any){
    event.preventDefault();
  }
  listarPersonas(){
    this.obt.obtener('/character')
    .then(data => data.json())
    .then(res => {
      console.log(res)
      this.lista=res.results
    }).catch(err => {
      console.log(err)
    })
  }
}
