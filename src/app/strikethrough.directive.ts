import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}
  
private textDecor (action:string){
  this.elem.nativeElement.style.textDecoration = 'action';
}

}
