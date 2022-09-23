import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alertService/alert.service';
import { UserService } from 'src/app/shared/services/userService/user.service';
import { Url } from 'src/models/Url';
import { customAlphabet } from 'nanoid'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const alphabet: string = "abcdefghijklmnopqrstuvqxyz";
const alphabetUpper: string = alphabet.toUpperCase();
const numbers: string = "0123456789"

const nanoid = customAlphabet(alphabet+alphabetUpper+numbers, 8);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService, public alertService: AlertService, public http:HttpClient) { }

  ngOnInit(): void {
  }


  url: string = '';

  short(): void {
    if(!this.userService.currentUser){
      this.alertService.setAlert("Please login to short urls.");
      return;
    }

    let myHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
    });
    this.http.post<Response>("https://localhost:7089/api/Url/Create?fullUrl="+this.url+"&shortUrl=/"+nanoid()+"&userId="+this.userService.currentUser.Id,null,{headers:myHeaders}).subscribe((response)=>{
      console.log(response);
    });
  }
}
