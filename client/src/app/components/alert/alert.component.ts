import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alertService/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
  }

}
