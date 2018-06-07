import {
  Component,
  OnInit,
  ElementRef,
  Renderer,
  HostListener,
  Input
} from '@angular/core';

@Component({
  selector: 'grs-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) {
  }

  public visible: Boolean = false;

  @Input() content;
  @Input() mode: 'light' | 'grey' | 'dark';

  @HostListener('mouseover') onHover() {
    this.visible = true;
  }

  @HostListener('mouseleave') onLeave() {
    this.visible = false;
  }

  ngOnInit() {
  }

}
