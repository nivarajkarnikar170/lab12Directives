import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {
  
  @Input() appMyVisibility: boolean;
    constructor(private el:ElementRef, private renderer: Renderer) { }
    ngOnInit(){
      console.log(this.appMyVisibility);
      if(this.appMyVisibility){
         this.renderer.setElementStyle(this.el.nativeElement, 'display', 'true');
      }
      else{
         this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      }
    }
}
