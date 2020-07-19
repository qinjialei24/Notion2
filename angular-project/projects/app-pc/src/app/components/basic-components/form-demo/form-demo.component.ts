import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  name = new FormControl('');

  constructor(
  ) {

  }

  ngOnInit() {
  }

  initProfileForm() {

  }

}
