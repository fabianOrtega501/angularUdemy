import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    
        <h1>{{title}}</h1>
        
        <button (click)="acumular( -base)"> -{{base}} </button>
        
        <span> {{base}} </span>
        
        <button (click)="acumular( base )"> +{{base}} </button>
    `,
    styleUrls: ['../../app.component.css']
})
export class contadorComponent{

    title: string = 'Contador App-2';
    number: number = 10;
    base: number = 5;

    acumular(valor: number){
    this.number += valor;
    }
}