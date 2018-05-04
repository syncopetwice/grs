import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  steps = [];

  constructor() { }

  ngOnInit() {
    this.steps = [
      {
        label: 'New Project',
        state: 'complete',
        icon: 'add-folder'
      },
      {
        label: 'Add Stakeholders',
        state: 'active',
        icon: 'add-location'
      },
      {
        label: 'Summary',
        icon: 'add-task'
      }
    ];
  }

}
