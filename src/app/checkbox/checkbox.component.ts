import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() checked: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
