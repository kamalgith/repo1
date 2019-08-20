import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent} from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
