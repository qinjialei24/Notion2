import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaLayoutComponent } from './ba-layout.component';

describe('BaLayoutComponent', () => {
  let component: BaLayoutComponent;
  let fixture: ComponentFixture<BaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
