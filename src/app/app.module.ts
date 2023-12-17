import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCheckboxModule } from '@angular/material/checkbox'
import { ProjectFormComponent } from './components/project-form/project-form.component'
import { ProjectsListComponent } from './components/projects-list/projects-list.component'
import { HouseRequestListComponent } from './components/house-request-list/house-request-list.component'
import { NewProjectComponent } from './pages/new-project/new-project.component'
import { EditProjectComponent } from './pages/edit-project/edit-project.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { HomeComponent } from './pages/home/home.component'
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { LoginComponent } from './pages/login/login.component'

const MaterialModules = [
  MatCheckboxModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent,
    ProjectsListComponent,
    HouseRequestListComponent,
    NewProjectComponent,
    EditProjectComponent,
    HomeComponent,
    ConfirmDialogComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ...MaterialModules,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [...MaterialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
