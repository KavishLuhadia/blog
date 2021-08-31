import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elementRef : ElementRef) {
    console.log(elementRef);
   }

   @HostListener('mouseover') onMouserOver(){
    this.elementRef.nativeElement.style.backgroundColor = "green";

   }

   @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = null;

   }

}
