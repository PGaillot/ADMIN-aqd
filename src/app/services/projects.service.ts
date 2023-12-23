import { Injectable } from '@angular/core'
import { Firestore, collection, collectionData, Query } from '@angular/fire/firestore'
import { Observable, tap } from 'rxjs'
import { Project } from '../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsCollection
  projects$: Observable<Project[]> = new Observable<Project[]>()

  constructor(private firestore: Firestore) {
    this.projectsCollection = collection(firestore, 'Projects');
    this.projects$ =  collectionData(this.projectsCollection) as Observable<Project[]>;
  }

  getProjects():Observable<Project[]> {
    return this.projects$;
  }
}
