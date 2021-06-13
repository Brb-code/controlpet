import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinarioComponent } from './veterinario.component';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    VeterinarioComponent
  ],
  imports: [
    CommonModule,
    VeterinarioRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class VeterinarioModule { }
