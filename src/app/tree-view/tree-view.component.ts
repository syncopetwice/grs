import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  public isHeaderCollapsed: Boolean = false;
  public list = [];

  constructor() { }

  ngOnInit() {
    this.list = [
      {
        level: 1
      },
      {
        level: 2
      },
      {
        level: 2
      },
      {
        level: 3
      },
      {
        level: 2
      },
    ]
  }

}
