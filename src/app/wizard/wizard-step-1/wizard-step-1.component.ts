import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInOutAnimation } from '../wizard.animations';

@Component({
  selector: 'grs-wizard-step-1',
  templateUrl: './wizard-step-1.component.html',
  styleUrls: ['./wizard-step-1.component.scss'],
  animations: [fadeInOutAnimation]
})
export class WizardStep1Component implements OnInit {

  constructor() { }

  // @HostBinding('@fadeInOut') get fadeInOut() {
  //   return true
  // }

  ngOnInit() {
  }

}
