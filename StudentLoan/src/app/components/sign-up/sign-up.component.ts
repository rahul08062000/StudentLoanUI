import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailDetails } from 'src/app/model/EmailDetails';
import { OtpserviceService } from 'src/app/service/otpservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public emailDetails:EmailDetails ={
    emailaddress:''
  } ;
  public sentotp:boolean=true;
  constructor( private otpserviceservice :OtpserviceService ,private router : Router) { 

  }

  ngOnInit(): void {
    
  }

  onSend() {
    console.log('Your form data : ', this.emailDetails);
    this.otpserviceservice.sendOtp(this.emailDetails).subscribe((data: any)=>{
      this.sentotp = data;
      console.log(data);
this.router.navigate(['/enterotp',{emailaddress:this.emailDetails.emailaddress}]);
       },(error)=>{
        this.sentotp = false;
console.log(error);
       })
}


}
