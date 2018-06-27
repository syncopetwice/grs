import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() type: String = 'text';
  @Input() placeholder: String = '';
  @Input() icon: Boolean = false;
  @Input() value: String = '';

  @Output() inputFocus = new EventEmitter();
  @Output() inputBlur = new EventEmitter();
  @Output() iconClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onInputFocus(): void {
    this.inputFocus.emit();
  }

  onInputBlur(): void {
    this.inputBlur.emit();
  }

  onIconClick(): void {
    console.log('on icon click');
    this.iconClick.emit();
  }

}
