import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EditProjectComponent } from './pages/edit-project/edit-project.component'
import { NewProjectComponent } from './pages/new-project/new-project.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthGuard } from './guard/auth.guard'
import { HouseRequestDetailsComponent } from './pages/house-request-details/house-request-details.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate:[AuthGuard]},
  { path: 'edit-project', component: EditProjectComponent , canActivate:[AuthGuard]},
  { path: 'house-request-details', component: HouseRequestDetailsComponent , canActivate:[AuthGuard]},
  { path: 'new-project', component: NewProjectComponent , canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'home'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
