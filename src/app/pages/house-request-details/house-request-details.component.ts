import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { HouseRequest } from 'src/app/models/house-request.model';

@Component({
  selector: 'app-house-request-details',
  templateUrl: './house-request-details.component.html',
  styleUrls: ['./house-request-details.component.scss']
})
export class HouseRequestDetailsComponent implements OnInit {
  private houseRequestsCollection
  houseRequest!:HouseRequest;
  projectData: any;
  newStatus!: 'approuved'| 'reject' | 'pending';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private firestore: Firestore,
  ) {
    this.houseRequestsCollection = collection(firestore, 'Projects')
  }

  openConfimDialog(){
      const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Delete this house request ?',
          content: 'are you sure you want to erase this house request ? this action is irreversible.',
        },
      })
      confirmDialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.log(res);
          this.router.navigate(['home'])
        }
      })
  }

  onChangeStatus(){

      console.log(this.newStatus)
      // setDoc(doc(this.houseRequestsCollection, this.houseRequest.id), this.houseRequest)
      //   .then((res) => {
      //     this.router.navigate(['home'])
      //   })
      //   .catch((e) => console.error(e))
    
  }

  ngOnInit(): void {
    // this.status = this.houseRequest.status;
    this.route.queryParams.subscribe((params) => {
      this.projectData = JSON.parse(params['projectData'])
      this.houseRequest = this.projectData
    })
  }

}
