import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortby: any):any {
    if (sortby == '1') {
      return value.sort((a: any, b: any) => (a.productName.toLowerCase() < b.productName.toLowerCase()) ? -1 : 1)
    }
    else if (sortby == '2') {
      return value.sort((a: any, b: any) => (a.productID < b.productID) ? -1 : 1)
    }
    else {
      return value.sort((a: any, b: any) => (a.productPrice < b.productPrice) ? -1 : 1)
    }
  }

}
