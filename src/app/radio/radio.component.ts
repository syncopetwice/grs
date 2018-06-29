import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
