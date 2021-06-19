import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinarioComponent } from './veterinario.component';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { InicioModule } from '../inicio/inicio.module';

@NgModule({
  declarations: [
    VeterinarioComponent
  ],
  imports: [
    CommonModule,
    VeterinarioRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    InicioModule
  ]
})
export class VeterinarioModule { }
