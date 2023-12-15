import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'edit-project', component:EditProjectComponent},
  {path:'new-project', component:NewProjectComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
