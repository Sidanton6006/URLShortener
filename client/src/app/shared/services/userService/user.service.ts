import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { Response } from 'src/models/Response';
import { AlertService } from '../alertService/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient, private alertService:AlertService) {
    let jwt = localStorage.getItem("jwtToken");

    if (jwt != null)
      this.getUser(jwt);
  }

  isAuthenticated: boolean = false;
  currentUser?: User = undefined;

  login(username: string, password: string): void {
    this.http.get<Response>("https://localhost:7089/api/Token/Get?username=" + username + "&password=" + password).subscribe((response) => {
      if (response.StatusCode == 200) {
        localStorage.setItem("jwtToken", response.Value);
        this.getUser(response.Value);
      }
      else {
        this.alertService.setAlert(response.Value);
      }
    });

  }

  logout(): void {
    localStorage.removeItem("jwtToken");
    this.currentUser = undefined;
    // window.location.reload();
  }

  private getUser(jwt: string): void {
    let UserId: string = JSON.parse(atob(jwt.split('.')[1])).UserId;

    let myHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    });
    this.http.get<Response>("https://localhost:7089/api/User/GetById?id=" + UserId, { headers: myHeaders }).subscribe((response) => {
      this.currentUser = response.Value;
    });
  }

  register(username: string, pasword: string): void {
    this.http.post<Response>("https://localhost:7089/api/User/Create?username="+username+"&password="+pasword,null).subscribe((response) => {
      console.log(response);
    });
  }
}
