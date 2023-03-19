import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignupDetailPageComponent } from './components/signup-detail-page/signup-detail-page.component';

const routes: Routes = [
  {path:"signUpPage",component:SignUpComponent},
  {path:"enterotp",component:OtpPageComponent}
  {path:"signUpForm",component:SignupDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
