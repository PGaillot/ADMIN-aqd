import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initLoginAction } from './state/login/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ADMIN-aqd';

  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(initLoginAction())
  }
}
