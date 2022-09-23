import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alertService/alert.service';
import { UrlService } from 'src/app/shared/services/urlService/url.service';
import { UserService } from 'src/app/shared/services/userService/user.service';
import { Url } from 'src/models/Url';

@Component({
  selector: 'app-url-table',
  templateUrl: './url-table.component.html',
  styleUrls: ['./url-table.component.css']
})
export class UrlTableComponent implements OnInit {

  constructor( public alertService:AlertService,  public urlService:UrlService) {
  }

  ngOnInit(): void {
    this.urlService.getAllUrls();
  }

}
