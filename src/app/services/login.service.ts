import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logged:boolean = false;

  isLoggedIn(){
    this.logged = true;
  }

  isSignOut(){
    this.logged = false;
  }

  isLogged():boolean{
    return this.logged;
  }

}
