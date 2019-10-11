import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titre="Coloriage";
  public couleur="blue";
  public police="'Times New Roman'";
  resultStyle={
    color:this.couleur,
    fontFamily:this.police
  }

  fontslist=["Calibri","Arial","'Times New Roman'"];

  changeValues(){
  this.resultStyle.color=this.couleur;
  this.resultStyle.fontFamily=this.police;
}
generalClass="";
changeClass(s:string){
this.generalClass=s;
}
}
