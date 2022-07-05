import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{path:'',component:LandingComponent},
                         {path:'greeting',component:GreetingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
