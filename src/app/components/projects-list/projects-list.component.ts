import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { Project } from 'src/app/models/project.model'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  displayedColumns: string[] = ['address', 'city', 'zipcode', 'edit']
  @Input() projects$!: Observable<Project[]>;
  dataSource: Observable<Project[]> = new Observable<Project[]>();
  constructor(private router: Router) {
  }

  navToEdit(project: Project) {
    const navigationExtras = {
      queryParams: {
        projectData: JSON.stringify(project),
      },
    };
    
    this.router.navigate(['/edit-project'], navigationExtras)
  }

  ngOnInit(): void {
    this.dataSource = this.projects$
  }
}
