import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { EmailDetails } from '../model/EmailDetails';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  private handleError(error: HttpErrorResponse) {
    if (error.status !== 200) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  constructor(private http: HttpClient) { }

  private otpurl:string = 'http://localhost:8080/sendMail';
   sendOtp(emaildetails:EmailDetails):Observable<boolean> { 

    console.log("inside service"+emaildetails.emailaddress)
   return this.http.post<boolean>(this.otpurl,emaildetails)
   .pipe(
    catchError(this.handleError)
  );

  }
}
