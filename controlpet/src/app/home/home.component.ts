import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    //let k = sessionStorage.getItem('tk')
    //if(k) location.href='pet'
  }

  ngOnInit(): void {
  }
  ingresar(){
    sessionStorage.setItem('tk', 'token....')
    location.href='pet'
  }
}
