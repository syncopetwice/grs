import { Component } from '@angular/core';

@Component({
  selector: 'grs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isModalOpen = false;

  isSidebarOpened: Boolean = false;

}
