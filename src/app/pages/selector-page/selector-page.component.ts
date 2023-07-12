import { Component } from '@angular/core';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent {
  
  lista:string[]=["Opcion 1","Opcion 2","Opcion 3", "Opcion 4"];
  // seleccionado: any= 'Opcion 3';
  seleccionado: any= undefined;
  

  listaObj: any [] = [
    {
      name: 'Opcion 1'
    },
    {
      name: 'Opcion 2'
    },
    {
      name: 'Opcion 3'
    },
  ];

  frutas: string [] = ['Manzana', 'Banana', 'Naranja', 'Piña', 'Mango'];

  dropdownValueChanged (evt: any) {
    console.log(JSON.stringify(evt));
  }

}
