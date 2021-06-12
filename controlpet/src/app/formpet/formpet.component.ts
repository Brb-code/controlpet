import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formpet',
  templateUrl: './formpet.component.html',
  styleUrls: ['./formpet.component.css']
})
export class FormpetComponent implements OnInit {
  imagen:string='';
  constructor(private dialog:MatDialogRef<FormpetComponent>) { }

  ngOnInit(): void {
  }
  cargarImagen(){
    document.getElementById('imagenF')?.click();
  }
  loadImg(event:any){
    const k = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(k);
    reader.onload = () => {
      let k:any = reader.result
      localStorage.setItem('iimg', k) 
    };
    setTimeout(() => {
      let k = localStorage.getItem('iimg')
      if(k) this.imagen=k
    }, 500);
  }
  guardar(event:any){
    event.preventDefault()
    this.dialog.close()
  }
}
