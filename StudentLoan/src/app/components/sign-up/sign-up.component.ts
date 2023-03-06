import { Component, OnInit } from '@angular/core';
import { EmailDetails } from 'src/app/model/EmailDetails';
import { OtpserviceService } from 'src/app/service/otpservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public emailDetails:EmailDetails | undefined ;
  public sentotp:any;
  constructor( private otpserviceservice :OtpserviceService) { 

  }

  ngOnInit(): void {
    this.otpserviceservice.sendOtp(this.emailDetails).subscribe((data: any)=>{
      this.sentotp = data;
       })
  }



}
