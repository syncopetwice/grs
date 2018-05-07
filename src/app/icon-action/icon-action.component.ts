import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-icon-action',
  templateUrl: './icon-action.component.html',
  styleUrls: ['./icon-action.component.scss']
})
export class IconActionComponent implements OnInit {

  @Input() type: string;
  @Input() size?: 'small';
  @Input() theme?: 'dark';
  @Input() straight?;

  constructor() { }

  ngOnInit() {
  }

}
