import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { MascotaComponent } from './mascota.component';
import { ListpetsComponent } from './listpets/listpets.component';
import { FormpetComponent } from './formpet/formpet.component';
import { OnepetComponent } from './onepet/onepet.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { InicioModule } from '../inicio/inicio.module';


@NgModule({
  declarations: [
    MascotaComponent,
    ListpetsComponent,
    FormpetComponent,
    OnepetComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    InicioModule,
    MatListModule
  ]
})
export class MascotaModule { }
