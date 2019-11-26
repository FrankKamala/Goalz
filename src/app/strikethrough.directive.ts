import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}

  @HostListener ("click")onClicks(){
    this.textDecor("line-through")
  }

  @HostListener ("dblclick")onDoubleClicks(){
    this.textDecor("none")
  }

private textDecor (action:string){
  this.elem.nativeElement.style.textDecoration = action;
}

}
