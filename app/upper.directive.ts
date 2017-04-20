import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  ngAfterViewInit() {
    let text = this.el.nativeElement.innerHTML;
    this.renderer.setElementProperty(this.el.nativeElement, 'innerText', text.toUpperCase());
  }
}


