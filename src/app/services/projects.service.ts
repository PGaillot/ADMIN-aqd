import { Injectable } from '@angular/core'
import { Firestore, collection, collectionData, Query, deleteDoc, doc } from '@angular/fire/firestore'
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


  //         setDoc(doc(this.projectsCollection, docRef.id), projectUpdated)

  removeProject(id:string):Promise<any>{
    return deleteDoc(doc(this.projectsCollection, id));
  }
}
