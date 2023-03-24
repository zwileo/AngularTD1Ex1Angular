import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le titre de mon application';
  
  nom:string = "Jean"
  
  verif:boolean=false;

  element:number=1

  etudiants:any[] = [
    {"nom":"Dupont", "age":25},
    {"nom":"caduque", "age":30},
    {"nom":"Toto", "age":22}
]

  choixClasse(isFirst:boolean, isLast:boolean)
  {
    var ma_classe:string="";
    if(isFirst || isLast)
    {
      ma_classe = "first_last";
    }
    return ma_classe;
  }

  choixClasse2(isEven:boolean)
  {
    var ma_classe:string="";
    if(isEven)
    {
      ma_classe = "even"
    }
    else
    {
      ma_classe = "odd"
    }
    return ma_classe;
  }

  
}
