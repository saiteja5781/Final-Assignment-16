import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const coursesArray = [];
    for (const course of value) {
      if (course.courseName.toLowerCase().includes(filteredString)) {
        coursesArray.push(course);
      }
    }
    return coursesArray;
  }


}
