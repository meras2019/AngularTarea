import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses() {
    return ['Curso_1', 'Curso_2', 'Curso_3', 'Curso_4', 'Curso_5'];
  }
}
