import { Injectable } from '@angular/core'
import { HouseRequest } from '../models/house-request.model'
import { Observable } from 'rxjs'
import {
  DocumentReference,
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})
export class HouseRequestsService {
  private houseRequestCollection
  houseRequest$: Observable<HouseRequest[]> = new Observable<HouseRequest[]>()

  constructor(private firestore: Firestore) {
    this.houseRequestCollection = collection(firestore, 'HouseRequests')
    this.houseRequest$ = collectionData(
      this.houseRequestCollection,
    ) as Observable<HouseRequest[]>
  }

  getHouseRequests(): Observable<HouseRequest[]> {
    return this.houseRequest$
  }

  removeHouseRequest(id: string): Promise<any> {
    return deleteDoc(doc(this.houseRequestCollection, id))
  }

  updateStatus(
    houseRequestId: string,
    newStatus: 'approuved' | 'reject' | 'pending',
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!houseRequestId) {
        console.error("L'identifiant de la demande de maison est vide.")
        reject(false)
      }
      
      const docRef = doc(this.houseRequestCollection, houseRequestId)
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            updateDoc(docRef, { status: newStatus })
              .then(() => {
                console.log('Statut mis à jour avec succès.');
                resolve(true);
              })
              .catch((e) => {
                console.error(e)
                reject(false)
              })
          } else {
            console.error("Le document n'existe pas.")
          }
        })
        .catch((e) => console.error(e))
    })
  }
}
