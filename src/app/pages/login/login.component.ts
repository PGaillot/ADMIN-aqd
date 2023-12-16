import { Component, OnInit } from '@angular/core'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'

const app = initializeApp(environment.firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router
  ) {}

  openLoginModal(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential!.accessToken

      //* USER LOGGED !
      const user = result.user;
      this.router.navigate(['home']);
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
  }

  ngOnInit(): void {
    
  }
}
