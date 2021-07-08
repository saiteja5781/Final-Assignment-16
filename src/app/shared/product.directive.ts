import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProduct]'
})
export class ProductDirective {

  //constructor() { }

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'black'
    this.bgcolor = 'white'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='blue'
     this.bgcolor = 'grey'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='black'
    this.bgcolor = 'white'

}
}
