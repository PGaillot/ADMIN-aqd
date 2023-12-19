import { Injectable } from '@angular/core'
import { initializeApp } from '@angular/fire/app'
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class ProjetsService {
  constructor() {}

  getProject() {
    
    const collectionRef = collection(db, 'Projects')
    getDocs(collectionRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        // Utilisez doc.data() pour obtenir les données du document
        data.push(doc.data())
      })
    })
  }
}
