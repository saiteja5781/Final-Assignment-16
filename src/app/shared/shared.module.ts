import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersearchPipe } from './filtersearch.pipe';
import { FiltersortPipe } from './filtersort.pipe';
import { SortPipe } from './sort.pipe';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ProductDirective } from './product.directive';




@NgModule({
  declarations: [
    FiltersearchPipe,
     FiltersortPipe,
     SortPipe,
     SearchfilterPipe,
     ProductDirective,
     ProductDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[FiltersearchPipe,
    FiltersortPipe,ProductDirective]
})
export class SharedModule { }

// @NgModule({
//   declarations: [
//     MyupperPipe,
//     SortPipe,
//     SearchPipe
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports:[MyupperPipe, SortPipe,SearchPipe]
// })
// export class SharedModule { }