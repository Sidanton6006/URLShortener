import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { UrlService } from 'src/app/shared/services/urlService/url.service';
import { Response } from 'src/models/Response';
import { Url } from 'src/models/Url';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private urlService:UrlService, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Response>("https://localhost:7089/api/Url/GetByShortUrl?shortUrl=/" + window.location.href.split('/')[3]).subscribe((response) => {
      let url:Url = response.Value;

      this.http.post<Response>("https://localhost:7089/api/Url/UpdateClicks?id=" + url.Id + "&clicks=" + (url.Clicks+1),null).subscribe((response)=>{
        console.log(response);
      })
      window.location.href = url.FullUrl;
    });
  }

}
