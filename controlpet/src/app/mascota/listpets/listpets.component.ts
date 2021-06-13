import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormpetComponent } from './../formpet/formpet.component';

@Component({
  selector: 'app-listpets',
  templateUrl: './listpets.component.html',
  styleUrls: ['./listpets.component.css']
})
export class ListpetsComponent implements OnInit {
  pets:any=[];
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  add(){
    let dialog = this.dialog.open(FormpetComponent)
    dialog.afterClosed().subscribe(data =>{
      if(data) this.cargarPets() 
    })
  }
  cargarPets(){
    alert('okkkk')
  }
}
