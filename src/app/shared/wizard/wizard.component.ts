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
        state: 'active',
        icon: 'add-folder'
      },
      {
        label: 'Add Stakeholders',
        icon: 'add-location'
      },
      {
        label: 'Summary',
        icon: 'add-task'
      }
    ];
  }

  activateNewProject() {
    this.steps = [
      {
        label: 'New Project',
        state: 'active',
        icon: 'add-folder'
      },
      {
        label: 'Add Stakeholders',
        icon: 'add-location'
      },
      {
        label: 'Summary',
        icon: 'add-task'
      }
    ];
  }

  activateAddStakeholders() {
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
  activateSummary() {
    this.steps = [
      {
        label: 'New Project',
        state: 'complete',
        icon: 'add-folder'
      },
      {
        label: 'Add Stakeholders',
        state: 'complete',
        icon: 'add-location'
      },
      {
        label: 'Summary',
        state: 'active',
        icon: 'add-task'
      }
    ];
  }

  completeWizard() {
    this.steps = [
      {
        label: 'New Project',
        state: 'complete',
        icon: 'add-folder'
      },
      {
        label: 'Add Stakeholders',
        state: 'complete',
        icon: 'add-location'
      },
      {
        label: 'Summary',
        state: 'complete',
        icon: 'add-task'
      }
    ];
  }

}
