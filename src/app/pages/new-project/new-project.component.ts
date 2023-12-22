import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';
import { createProject } from 'src/app/state/root/root.actions';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    private store:Store
  ) { }

  submitForm(project:Project){
    this.store.dispatch(createProject({project:project}))
  }

  ngOnInit(): void {
  }

}
