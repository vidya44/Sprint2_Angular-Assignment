import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path : 'home'
  },
  {
    component: LoginComponent,
    path : 'login'
   },
   {
     component:UserComponent,
     path : 'user'
   },
   {
    component : WelcomeComponent,
    path : 'welcome/:username'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login' ,pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }