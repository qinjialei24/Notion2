import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalModuleComponent } from './global-module.component';

describe('GlobalModuleComponent', () => {
  let component: GlobalModuleComponent;
  let fixture: ComponentFixture<GlobalModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
