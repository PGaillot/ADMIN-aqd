import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  projectData: any;

  project!: Project
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectData = JSON.parse(params['projectData']);
      this.project = this.projectData;
    })

  }
}
