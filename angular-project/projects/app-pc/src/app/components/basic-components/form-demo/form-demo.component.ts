import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'global-module';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  name = new FormControl('');

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.log();
  }

  initProfileForm() {

  }

}
