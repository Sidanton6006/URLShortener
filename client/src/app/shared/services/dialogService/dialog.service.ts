import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  loginVisible = false;

  setLoginVisibility(visible: boolean): void{
    this.loginVisible = visible;
    this.registerVisible = false;
  }

  registerVisible = false;

  setRegisterVisibility(visible: boolean): void{
    this.registerVisible = visible;
    this.loginVisible = false;
  }

  constructor() { }
}
