import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { getAuth, signOut } from 'firebase/auth'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router:Router
  ) {}

  logged: boolean = false

  isLoggedIn() {
    this.logged = true
  }

  isLogout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.logged = false;
        localStorage.removeItem('gg-authToken');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        // An error happened.
      })
  }

  isLogged(): boolean {
    return this.logged
  }
}
