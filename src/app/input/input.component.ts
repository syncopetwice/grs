import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() type: String = 'text';

  @Input() value: String;

  @Output() inputFocus = new EventEmitter();
  @Output() inputBlur = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onInputFocus(): void {
    this.inputFocus.emit();
  }

  onInputBlur(): void {
    this.inputBlur.emit();
  }

}
