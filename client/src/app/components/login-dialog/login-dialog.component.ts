import { Component, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alertService/alert.service';
import { DialogService } from 'src/app/shared/services/dialogService/dialog.service';
import { UserService } from 'src/app/shared/services/userService/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogService: DialogService, private userService: UserService, private alertService:AlertService) { }

  username: string = '';
  password: string = '';

  login(): void {
    if(this.username == ''&&this.password == ''){
      this.alertService.setAlert("Fields cant be empty.")
    }
    this.dialogService.setLoginVisibility(false);
    this.userService.login(this.username, this.password);
  }

  ngOnInit(): void {
  }

}
