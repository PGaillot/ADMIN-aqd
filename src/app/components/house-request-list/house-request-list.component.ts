import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { HouseRequest } from 'src/app/models/house-request.model'

@Component({
  selector: 'app-house-request-list',
  templateUrl: './house-request-list.component.html',
  styleUrls: ['./house-request-list.component.scss'],
})
export class HouseRequestListComponent implements OnInit {
  displayedColumns: string[] = ['address', 'mail', 'status', 'edit']
  @Input() houseRequests!: Observable<HouseRequest[]>

  constructor(private router: Router) {}

  navToEdit(houseRequest: HouseRequest) {
    const navigationExtras = {
      queryParams: {
        projectData: JSON.stringify(houseRequest),
      },
    }

    this.router.navigate(['house-request-details'], navigationExtras)
  }

  ngOnInit(): void {}
}
