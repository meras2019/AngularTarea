import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  constructor() {}

  getAutores() {
    return ['Autor1', 'Autor2', 'Autor3', 'Autor4', 'Autor5'];
  }
}
