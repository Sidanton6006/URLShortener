import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialogService/dialog.service';
import { UserService } from 'src/app/shared/services/userService/user.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialogService: DialogService, private userService: UserService) { }

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister(): void {
    this.dialogService.setRegisterVisibility(false)
    if(this.username!=''&&this.password!=''&&this.confirmPassword!=''&&this.password==this.confirmPassword){
      this.userService.register(this.username,this.confirmPassword);
    }
  }

  ngOnInit(): void {
  }

}
