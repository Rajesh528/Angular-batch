import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home", component:HomeComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"**",component:ErrorComponent},
  {path:"superadmin",loadChildren: () =>import('./superadmin/superadmin.module').then(x=>x.SuperadminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
