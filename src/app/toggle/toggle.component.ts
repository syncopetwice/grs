import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
