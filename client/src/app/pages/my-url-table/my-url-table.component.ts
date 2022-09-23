import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/shared/services/urlService/url.service';

@Component({
  selector: 'app-my-url-table',
  templateUrl: './my-url-table.component.html',
  styleUrls: ['./my-url-table.component.css']
})
export class MyUrlTableComponent implements OnInit {

  constructor(public urlService:UrlService) {

  }

  ngOnInit(): void {
    this.urlService.getMyUrls();
  }

}
