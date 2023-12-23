import { Injectable } from '@angular/core'
import { Firestore, collectionData, collection } from '@angular/fire/firestore'
import { inject } from '@angular/core'
import { Observable } from 'rxjs'
import { Project } from '../models/project.model'

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  firestore: Firestore = inject(Firestore);
  projects$:Observable<any> =  new Observable<any>();
  constructor() {
    const projectCollection = collection(this.firestore, 'Projects');
    this.projects$ = collectionData(projectCollection);
    }

  
  getProjects(){

    this.projects$.subscribe(res => console.log(res))
    
  }
}
