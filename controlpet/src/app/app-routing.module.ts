import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  
{ path: 'mascota', loadChildren: () => import('./mascota/mascota.module').then(m => m.MascotaModule) },
  
{ path: 'veterinario', loadChildren: () => import('./veterinario/veterinario.module').then(m => m.VeterinarioModule) },
{
  path:'**', redirectTo:'inicio'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
