import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';

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

  @HostBinding('class.focused') focused: Boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onInputFocus(): void {
    this.focused = true;
    this.inputFocus.emit();
  }

  onInputBlur(): void {
    this.focused = false;
    this.inputBlur.emit();
  }

  onIconClick(): void {
    this.iconClick.emit();
  }

}
