import { Injectable } from '@angular/core';
import { HouseRequest } from '../models/house-request.model';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HouseRequestsService {

  private houseRequestCollection;
  houseRequest$: Observable<HouseRequest[]> = new Observable<HouseRequest[]>()

  constructor(private firestore: Firestore) { 
    this.houseRequestCollection = collection(firestore, 'HouseRequests');
    this.houseRequest$ =  collectionData(this.houseRequestCollection) as Observable<HouseRequest[]>;
  }

  getHouseRequests():Observable<HouseRequest[]> {
    return this.houseRequest$;
  }


}
