import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bu-sidebar',
  templateUrl: './bu-sidebar.component.html',
  styleUrls: ['./bu-sidebar.component.scss']
})
export class BuSidebarComponent implements OnInit {

  constructor() { }

  tree = [{
    name: 'root',
    children: [{
      name: 'node1'
    }, {
      name: 'node2',
      children: [{
        name: 'node21'
      }]
    }, {
      name: 'node3',
      children: [{
        name: 'node31'
      }]
    }]
  }];

  ngOnInit() {
  }

}
