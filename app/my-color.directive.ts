import { Directive, ElementRef, Renderer, HostListener, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  @Output() colorChange;

  str = ["blue", "yellow", "orange"];
  //@Input() appMyColor: string[];
  index: number = 0;
  size: number = this.str.length;
  constructor(private el: ElementRef, private renderer: Renderer) { 
    this.colorChange = new EventEmitter();
  }

  @HostListener('mouseup') onColorClick() {

    if (this.index == this.size) {
      this.index = 0;
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'color', this.str[this.index++]);
    console.log(this.str[this.index - 1]);
    this.colorChange.emit(this.str[this.index -1]);
  }

}
