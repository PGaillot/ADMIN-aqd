import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { Project } from 'src/app/models/project.model'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { LiveAnnouncer } from '@angular/cdk/a11y'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['address', 'city', 'zipcode', 'edit']
  @Input() projects$!: Observable<Project[]>
  // dataSource: Observable<Project[]> = new Observable<Project[]>();
  dataSource = new MatTableDataSource<Project>()
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private liveAnnouncer: LiveAnnouncer) {}

  navToEdit(project: Project) {
    const navigationExtras = {
      queryParams: {
        projectData: JSON.stringify(project),
      },
    }

    this.router.navigate(['/edit-project'], navigationExtras)
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
    } else {
      this.liveAnnouncer.announce('Sorting cleared')
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.projects$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })  }
}
