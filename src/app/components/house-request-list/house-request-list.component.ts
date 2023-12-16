import { Component, Input, OnInit } from '@angular/core';
import { HouseRequest } from 'src/app/models/house-request.model';

@Component({
  selector: 'app-house-request-list',
  templateUrl: './house-request-list.component.html',
  styleUrls: ['./house-request-list.component.scss']
})
export class HouseRequestListComponent implements OnInit {

  displayedColumns:string[] = ['address', 'mail'];
  @Input() houseRequests!:HouseRequest[];


  constructor() { }


  ngOnInit(): void {
    
  }

}
