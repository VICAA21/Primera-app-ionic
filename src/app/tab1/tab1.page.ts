import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
      console.log("Hola mundo en Ionic");

      let numero = 20;
      debugger;//Esta palabra reservada va a parar nuestra aplicacion en el punto exacto donde se coloque 
      numero = 10;
      numero = 15;
      numero = 100;

      console.log("La variable esta tomando este valor: ", numero);
  }
}
