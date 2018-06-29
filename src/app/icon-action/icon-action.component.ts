import { Component, OnInit, Input } from '@angular/core';

interface Options {
  transparent?: boolean;
  size?: 'x-small' | 'small';
  theme?: 'dark';
}

@Component({
  selector: 'grs-icon-action',
  templateUrl: './icon-action.component.html',
  styleUrls: ['./icon-action.component.scss']
})
export class IconActionComponent implements OnInit {

  @Input() type: string;
  @Input() subtype: string;
  @Input() theme?: 'dark';
  @Input() straight?;

  @Input() transparent?: Boolean = false;

  @Input() options: Options = {};

  constructor() { }

  ngOnInit() {}

}
