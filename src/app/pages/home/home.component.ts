import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { HouseRequest } from 'src/app/models/house-request.model'
import { Project } from 'src/app/models/project.model'
import { User } from 'src/app/models/user.model'
import { HouseRequestsService } from 'src/app/services/house-requests.service'
import { LoginService } from 'src/app/services/login.service'
import { ProjectsService } from 'src/app/services/projects.service'
import { clearLogin } from 'src/app/state/login/login.actions'
import {
  initState,
  updateHouseRequests,
  updateProjects,
} from 'src/app/state/root/root.actions'

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
    private houseRequestServices: HouseRequestsService,
  ) {}

  projects$: Observable<Project[]> = new Observable<Project[]>()
  houseRequests$: Observable<HouseRequest[]> = new Observable<HouseRequest[]>()

  user$: Observable<string> = new Observable<string>()

  onLogout() {
    // this.store.dispatch(clearLogin())
    this.loginService.isLogout()
  }

  ngOnInit(): void {
    this.store.dispatch(initState())

    this.houseRequests$ = this.houseRequestServices.houseRequest$
    this.houseRequests$.subscribe((houseRequests) =>
      this.store.dispatch(updateHouseRequests({ houseRequest: houseRequests })),
    )

    this.projects$ = this.projectsService.getProjects()
    this.projects$.subscribe((projects) => {
      this.store.dispatch(updateProjects({ projects: projects }))
    })
  }
}
