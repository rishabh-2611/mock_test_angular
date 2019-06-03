import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { InfoComponent } from './info/info.component';

const app_route:Routes=[
    {
      path:'',
      component: LoginComponent
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'aptitude',
      component: AptitudeComponent
    },
    {
      path:'info',
      component: InfoComponent
    },
    {
      path:'**',
      redirectTo: ''
    },
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(app_route)
  ],
  exports:[
    RouterModule
  ]
})
export class routes {
}