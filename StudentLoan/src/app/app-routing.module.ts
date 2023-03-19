import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignupDetailPageComponent } from './components/signup-detail-page/signup-detail-page.component';

const routes: Routes = [
  {path:"signUpPage",component:SignUpComponent},
  {path:"signUpForm",component:SignupDetailPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
