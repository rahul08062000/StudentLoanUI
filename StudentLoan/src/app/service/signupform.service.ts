import { Injectable } from '@angular/core';
import { UserDetail } from '../model/UserDetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SignupformService {

  constructor(private http : HttpClient) { }

  private saveurl:string = 'http://localhost:8080/sign-up-form';
  savesignupform(userdetail:UserDetail):Observable<boolean> { 

   console.log("inside service"+userdetail)
  return this.http.post<boolean>(this.saveurl,userdetail);

 }
}
