import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-tree-view-item',
  templateUrl: './tree-view-item.component.html',
  styleUrls: ['./tree-view-item.component.scss']
})
export class TreeViewItemComponent implements OnInit {

  @Input() level: number;

  isHeaderCollapsed: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
