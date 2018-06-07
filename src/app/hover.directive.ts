import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[grsHover]'
})
export class HoverDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) {
    renderer.setElementStyle(element.nativeElement, 'border', '2px solid black')
  }

  @HostListener('mouseover') onHover() {
    console.log('hover');
  }

  @HostListener('mouseleave') onLeave() {
    console.log('leave');
  }

}
