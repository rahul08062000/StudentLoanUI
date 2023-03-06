import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmailDetails } from '../model/EmailDetails';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {


  constructor(private http: HttpClient) { }

  private otpurl:string = '';
   sendOtp(emaildetails:EmailDetails):Observable<boolean> { 

   return this.http.post<boolean>(this.otpurl,emaildetails);

  }
}
