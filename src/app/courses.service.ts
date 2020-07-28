import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses() {
    return ['Angular', 'Inles', 'Ract', 'node', 'Vue'];
  }
}
