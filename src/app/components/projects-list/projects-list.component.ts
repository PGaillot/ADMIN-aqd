import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { Project } from 'src/app/models/project.model'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  displayedColumns: string[] = ['address', 'city', 'zipcode', 'edit']
  // dataSource: MatTableDataSource<Project>;
  @Input() projects!: Project[]
  dataSource: Project[] = []
  constructor(private router: Router) {
    // this.dataSource = new MatTableDataSource(this.projects);
    // console.log(this.dataSource);
  }

  navToEdit(project: Project) {
    console.log(project);
    // Dans le code qui effectue la navigation
    const navigationExtras = {
      queryParams: {
        projectData: JSON.stringify(project),
      },
    };
    console.log(navigationExtras);
    
    this.router.navigate(['/edit-project'], navigationExtras)
  }

  ngOnInit(): void {
    this.dataSource = this.projects
  }
}
