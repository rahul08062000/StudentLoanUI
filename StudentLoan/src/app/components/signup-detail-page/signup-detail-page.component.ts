import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/model/UserDetail';
import { SignupformService } from 'src/app/service/signupform.service';

@Component({
  selector: 'app-signup-detail-page',
  templateUrl: './signup-detail-page.component.html',
  styleUrls: ['./signup-detail-page.component.css']
})
export class SignupDetailPageComponent implements OnInit {

  private savedflag = false;
  constructor( private signupformservice : SignupformService) { }

  ngOnInit(): void {
  }

  

  onClickSubmit(result:UserDetail) {
    console.log( result ); 
    this.signupformservice.savesignupform(result).subscribe((data: any)=>{
      this.savedflag = data;
      console.log(data);
      if(this.savedflag === true){

      }
       });
 }
  
}
