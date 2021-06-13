import { Component, OnInit } from '@angular/core';
import { SesionService } from '../sesion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private tk:SesionService) { }

  ngOnInit(): void {
  }
  ingresar(){
    this.tk.inicioSesion('token....')
  }
}
