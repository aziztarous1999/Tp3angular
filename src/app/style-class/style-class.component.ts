import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  couleur="red";
  taille=32;
  style="italic";
  getColor(){
    return "green";
  }
para4Style={
  fontStyle:"italic",
  fontSize:"24px",
  background:"red"


}


public admin=true;
public classe="c1";


}
