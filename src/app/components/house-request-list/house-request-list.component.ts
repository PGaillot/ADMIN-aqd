import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseRequest } from 'src/app/models/house-request.model';

@Component({
  selector: 'app-house-request-list',
  templateUrl: './house-request-list.component.html',
  styleUrls: ['./house-request-list.component.scss']
})
export class HouseRequestListComponent implements OnInit {

  displayedColumns:string[] = ['address', 'mail', 'status', 'edit'];
  @Input() houseRequests!:Observable<HouseRequest[]>;


  constructor() { }

  navToEdit(houseRequest:HouseRequest){
    console.log('nev to edit ?...');
    
  }

  ngOnInit(): void {
    
  }

}
