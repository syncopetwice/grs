import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'grs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() open: boolean;

  constructor() {}

  ngOnInit() {}

}
