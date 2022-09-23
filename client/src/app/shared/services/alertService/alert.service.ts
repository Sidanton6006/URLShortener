import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  isVisible: boolean = false;
  timerId: any;

  content:string = "";

  setAlert(text:string): void{
    this.isVisible = true;
    this.content = text;

    if(this.isVisible){
      this.timerId = setInterval(() => {
      this.endTimer()}, 5000);
    }
  }

  endTimer():void {
    if(this.timerId){
      this.isVisible = false;
      clearInterval(this.timerId);
    }
  }

  constructor() { }
}
