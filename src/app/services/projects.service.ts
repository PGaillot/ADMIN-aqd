import { Injectable } from '@angular/core'
import { Firestore, collection, collectionData, Query } from '@angular/fire/firestore'
import { Observable, tap } from 'rxjs'
import { Project } from '../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsCollection
  projects$: Observable<any[]> = new Observable<any[]>()

  constructor(private firestore: Firestore) {
    this.projectsCollection = collection(firestore, 'Projects');
    this.projects$ =  collectionData(this.projectsCollection);
  }

  getProjects() {
    this.projects$.subscribe()
  }
}
