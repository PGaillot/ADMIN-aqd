import { Component, OnInit } from '@angular/core'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'
import { Store } from '@ngrx/store'
import { updateUser } from 'src/app/state/login/login.actions'
import { User } from 'src/app/models/user.model'

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
    private router:Router,
    private loginService:LoginService,
    private store:Store,
  ) {}

  openLoginModal(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;

      //* USER LOGGED !
      if(result.user.displayName && result.user.email){
        const user:User = {username :result.user.displayName, mail: result.user.email, id:result.user.uid};
        this.loginService.isLoggedIn();
        this.router.navigate(['home']);
        this.store.dispatch(updateUser({user}));
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  }

  ngOnInit(): void {
    
  }
}
