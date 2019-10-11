import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profils=["Admin", "User", "Visitor"];
  profil="Visitor";
  titre="Liste Des Profils";


  minimum(){

  }

  moyenne(){
    
  }
}
