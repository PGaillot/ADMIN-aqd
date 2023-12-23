import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { HouseRequest } from 'src/app/models/house-request.model'
import { Project } from 'src/app/models/project.model'
import { User } from 'src/app/models/user.model'
import { LoginService } from 'src/app/services/login.service'
import { ProjectsService } from 'src/app/services/projects.service'
import { clearLogin } from 'src/app/state/login/login.actions'
import { initState, updateHouseRequests, updateProjects } from 'src/app/state/root/root.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private loginService: LoginService,
     private store: Store,
     private projectsService: ProjectsService,
     ) {}
  

  houseRequests: HouseRequest[] = [
    {
      mail: 'pr.gaillot@gmail.com',
      address: '13 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'approuved',
      zipcode: '80000',
      city: 'Amiens',
    },
    {
      mail: 'camImmo@gmail.com',
      address: '13 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'reject',
      zipcode: '80000',
      city: 'Amiens',
    },
    {
      mail: 'superTest@gmail.com',
      address: '34 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'pending',
      zipcode: '80000',
      city: 'Amiens',
    },
    {
      mail: 'testtesttest@yahoo.fr',
      address: '56 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'pending',
      zipcode: '80000',
      city: 'Amiens',
    },
  ]

  projects$:Observable<Project[]> = new Observable<Project[]>();

  user$: Observable<string> = new Observable<string>()

  onLogout() {
    // this.store.dispatch(clearLogin())
    this.loginService.isLogout()
  }

  ngOnInit(): void {
    this.store.dispatch(initState());


    this.projects$ = this.projectsService.getProjects();
    this.projects$.subscribe(projects => {
      this.store.dispatch(updateProjects({projects:projects}))
    })

    this.store.dispatch(updateHouseRequests({houseRequest:this.houseRequests}));
  }
}
