import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Project } from 'src/app/models/project.model'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  projectData: any

  project!: Project
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  openConfimDialog() {
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete this project.',
        content: 'are you sure you want to erase this project? this action is irreversible.',
      },
    })
    confirmDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.router.navigate(['home'])
      } else {
      }
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectData = JSON.parse(params['projectData'])
      this.project = this.projectData
    })
  }
}
