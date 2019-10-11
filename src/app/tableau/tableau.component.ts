import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
title1="Opérations sur un tableau";
title2="Affichage des boutons des éléments pairs du tableau";
title3="Affichage des éléments pairs du tableau";
title4="Affichage des si le éléments pairs ou impaire :method ";
tab= [15, 23, 46.2, 0, 89, 17, 80];


/*valclass=true;

public hasError=false;
public isSpecial=true;
public messageClasses={
  "success":!this.hasError,
  "error":this.hasError,
  "special":this.isSpecial
}
inputValue:string="";*/

}
