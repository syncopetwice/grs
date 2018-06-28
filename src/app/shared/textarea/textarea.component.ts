import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'grs-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @HostBinding('class.focused') focused: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }

}
