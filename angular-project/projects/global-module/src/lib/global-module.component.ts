import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-global-module',
  template: `
    <p>
      global-module works!
    </p>
  `,
  styles: []
})
export class GlobalModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
