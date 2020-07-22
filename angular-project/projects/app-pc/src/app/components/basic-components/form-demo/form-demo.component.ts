import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'global-module';
import { Observable } from 'rxjs';

interface Error {
  error: boolean;
  message: string;
}

interface Res {
  name: string;
  age: string;
}



@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [this.asyncValidate.bind(this)],
    }),
    age: new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: []
    })
  });


  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.getData().subscribe((res) => {
      this.form.patchValue({
        name: res.name,
        age: res.age,
      });
    });
  }

  getData(): Observable<Res> {
    const data: Res = {
      name: '小明',
      age: '19',
    };

    return new Observable((observer) => {
      setTimeout(() => {
        return observer.next(data);
      }, 2000);
    });
  }

  asyncValidate({ value }: AbstractControl): Observable<Error> {
    console.log('this.form.dirty 的值是：', this.form.dirty);
    if (this.form.dirty) {
      return this.asyncValidateService();
    } else {
      return new Observable((observer) => {
        return observer.next({
          error: false,
          message: '异步验证成功'
        });
      });
    }
  }

  asyncValidateService(): Observable<Error> {
    console.log('asyncValidateService');
    return new Observable((observer) => {
      setTimeout(() => {
        return observer.next({
          error: true,
          message: '异步验证失败'
        });
      }, 1000);
    });
  }


  initProfileForm() {

  }

}
