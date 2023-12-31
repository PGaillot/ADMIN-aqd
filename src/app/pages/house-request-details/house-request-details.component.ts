import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core'
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component'
import { HouseRequest } from 'src/app/models/house-request.model'
import { HouseRequestsService } from 'src/app/services/house-requests.service'
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
  selector: 'app-house-request-details',
  templateUrl: './house-request-details.component.html',
  styleUrls: ['./house-request-details.component.scss'],
})
export class HouseRequestDetailsComponent implements OnInit {
  private houseRequestsCollection
  houseRequest!: HouseRequest
  projectData: any
  newStatus!: 'approuved' | 'reject' | 'pending'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private firestore: Firestore,
    private houseRequestService: HouseRequestsService,
    private snackBar: MatSnackBar,
  ) {
    this.houseRequestsCollection = collection(firestore, 'Projects')
  }

  @ViewChild('ngForm') formRef!: ElementRef

  openConfimDialog() {
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete this house request ?',
        content:
          'are you sure you want to erase this house request ? this action is irreversible.',
      },
    })
    confirmDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log(res)
        this.router.navigate(['home'])
      }
    })
  }

  onChangeStatus() {
    const config = new MatSnackBarConfig()
    config.duration = 2500

    if (this.houseRequest.status !== this.newStatus) {
      this.houseRequestService
        .updateStatus(this.houseRequest.id, this.newStatus)
        .then(() => {
          this.router.navigate(['home'])
          this.snackBar.openFromComponent(SuccessSnackBar, {
            ...config,
            data: this.newStatus,
          })
        })
        .catch()
    } else {
      this.router.navigate(['home'])
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectData = JSON.parse(params['projectData'])
      this.houseRequest = this.projectData
      this.newStatus = this.houseRequest.status
    })
  }
}








@Component({
  selector: 'app-success-snack-bar',
  template: `
    <span class="sucess-snack-bar">
      Le status de la request est desrormais {{ data }}.
    </span>
  `,
  styles: [
    `
      .sucess-snack-bar {
        // color:green;
      }
    `,
  ],
})
class SuccessSnackBar {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
