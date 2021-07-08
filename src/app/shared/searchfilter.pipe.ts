import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, filteredString: string):any {

    if (filteredString =='') {

      return value;

    }


else{
    const pArray = [];

    for (const product of value) {

      if (product.productName.toLowerCase().includes(filteredString)) {

        pArray.push(product);

      }

    }

    return pArray;

  }
}

}
