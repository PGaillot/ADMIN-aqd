import { Component, OnInit } from '@angular/core'
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithCustomToken,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'
import { Store } from '@ngrx/store'
import { updateUser } from 'src/app/state/login/login.actions'
import { User } from 'src/app/models/user.model'
import { ProjectsService } from 'src/app/services/projects.service'

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
    private router: Router,
    private loginService: LoginService,
    private store: Store,
    private projectsService: ProjectsService,
  ) {}

  signIn(){
    signInWithRedirect(auth, provider);
  }

  login(signInResult:any){
    const credential = GoogleAuthProvider.credentialFromResult(signInResult)
    const token = credential!.accessToken

    if (signInResult.user.displayName && signInResult.user.email) {
      const user: User = {
        username: signInResult.user.displayName,
        mail: signInResult.user.email,
        id: signInResult.user.uid,
      }
      this.loginService.isLoggedIn()
      this.router.navigate(['home'])
      this.store.dispatch(updateUser({ user }))
    }
  }

  ngOnInit(): void {
    const authToken = localStorage.getItem('gg-authToken')
    if (authToken) {
      console.log('auhToken !')

      const credential = GoogleAuthProvider.credential(null, authToken)
      signInWithCredential(auth, credential)
        .then((result) => {
         this.login(result)
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem('gg-authToken');
        })
    } else {
      this.signIn();
    }

    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          this.login(result)
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem('gg-authToken');
      })
  }
}
