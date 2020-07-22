import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFormComponent } from './ba-form.component';

describe('BaFormComponent', () => {
  let component: BaFormComponent;
  let fixture: ComponentFixture<BaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
