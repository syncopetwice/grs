import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
