import { Component, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialogService/dialog.service';
import { UserService } from 'src/app/shared/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialogService: DialogService, public userService:UserService) { }

  ngOnInit(): void {
  }

}
