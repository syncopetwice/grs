import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'grs-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() type: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
