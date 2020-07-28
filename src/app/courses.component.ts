import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Lista de los cursos</h1>
    <div *ngFor="let course of courses">{{ course }}</div>
  `,
  styles: ['h1{color:red}'],
})
export class CoursesComponent {
  courses: string[];

  constructor(coursesServices: CoursesService) {
    this.courses = coursesServices.getCourses();
  }
}
