import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ListvetsComponent } from './listvets/listvets.component';

const routes: Routes = [{ path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  
{ path: 'mascota', loadChildren: () => import('./mascota/mascota.module').then(m => m.MascotaModule) },
  
{ path: 'veterinario', loadChildren: () => import('./veterinario/veterinario.module').then(m => m.VeterinarioModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
