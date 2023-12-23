import { Component, OnInit, inject } from '@angular/core'
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  DocumentReference,
  setDoc,
  doc,
} from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Project } from 'src/app/models/project.model'
import { createProject } from 'src/app/state/root/root.actions'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  private projectsCollection

  constructor(
    private store: Store,
    private firestore: Firestore,
    private router: Router,
  ) {
    this.projectsCollection = collection(firestore, 'Projects')
  }

  submitForm(project: Project) {
    addDoc(this.projectsCollection, project)
      .then((docRef: DocumentReference) => {
        const projectUpdated: Project = {
          ...project,
          id: docRef.id,
        }

        setDoc(doc(this.projectsCollection, docRef.id), projectUpdated)
          .then((res) => {
            this.store.dispatch(createProject({ project: projectUpdated }))
            this.router.navigate(['home'])
            console.log(res)
          })
          .catch((e) => console.error(e))
      })
      .catch((e) => console.error(e))
  }

  ngOnInit(): void {}
}
