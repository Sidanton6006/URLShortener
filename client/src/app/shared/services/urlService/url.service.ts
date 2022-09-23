import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from 'src/models/Response';
import { Url } from 'src/models/Url';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(public http: HttpClient, public userService: UserService) {
  }

  urls: Url[] = [];
  myUrls: Url[] = [];

  getAllUrls(): void {
    this.http.get<Response>("https://localhost:7089/api/Url/GetAll").subscribe((response) => {
      this.urls = response.Value;
    });
  }

  getMyUrls(): void {
    let myHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    });
    this.http.get<Response>("https://localhost:7089/api/Url/GetByUserId?userId=" + this.userService.currentUser?.Id, { headers: myHeaders }).subscribe((response) => {
      this.myUrls = response.Value;
    });
  }
}
