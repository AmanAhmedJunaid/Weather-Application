import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Weather/main/main.component';
import { NotFoundComponent } from './Weather/not-found/not-found.component';
import { activateapage } from './Weather/assets/Auth/activate.auth';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'not-found',component:NotFoundComponent, canActivate:[activateapage] },
  {path:'**' , redirectTo:'' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
