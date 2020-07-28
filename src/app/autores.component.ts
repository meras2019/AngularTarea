import { Component } from '@angular/core';
import { AutoresService } from './autores.service';

@Component({
  selector: 'app-autores',
  template: `
    <h1>Lista de Autores</h1>
    <div *ngFor="let autor of autores">{{ autor }}</div>
  `,
  styles: ['h1{color:red}'],
})
export class AutoresComponent {
  autores: string[];

  constructor(autoresServices: AutoresService) {
    this.autores = autoresServices.getAutores();
  }
}
