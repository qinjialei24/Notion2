import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFormItemComponent } from './ba-form-item.component';

describe('BaFormItemComponent', () => {
  let component: BaFormItemComponent;
  let fixture: ComponentFixture<BaFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
