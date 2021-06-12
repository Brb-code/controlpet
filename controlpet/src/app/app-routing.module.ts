import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListpetsComponent } from './listpets/listpets.component';
import { ListvetsComponent } from './listvets/listvets.component';
import { OnepetComponent } from './onepet/onepet.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },{
    path:'pet',
    component:ListpetsComponent
  },{
    path:'pet/:id',
    component:OnepetComponent
  },{
    path:'vet',
    component:ListvetsComponent
  },{
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
