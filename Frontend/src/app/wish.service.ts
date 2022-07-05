import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  server_address :string ='api';

  constructor(private http:HttpClient) { }
  sendMail(user:any){
    console.log('helo service')
    console.log(user)
    return this.http.post<any>(`${this.server_address}/sendmail`,user).subscribe(
    data => {
        console.log("POST Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }
); 
  }
  
}
