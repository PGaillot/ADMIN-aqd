import { Component, OnInit, inject } from '@angular/core'
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  DocumentReference,
} from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { Project } from 'src/app/models/project.model'
import { createProject } from 'src/app/state/root/root.actions'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {

  private projectsCollection;

  constructor(
    private store: Store, 
    private firestore: Firestore
    ) {
      this.projectsCollection = collection(firestore, 'Projects')
    }

  submitForm(project: Project) {
    this.store.dispatch(createProject({ project: project }))

    addDoc(this.projectsCollection, project).then((docRef: DocumentReference) => {
      console.log(docRef)
    })
  }

  ngOnInit(): void {}
}
