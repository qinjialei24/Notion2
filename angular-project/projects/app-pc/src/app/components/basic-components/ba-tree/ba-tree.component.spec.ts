import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTreeComponent } from './ba-tree.component';

describe('BaTreeComponent', () => {
  let component: BaTreeComponent;
  let fixture: ComponentFixture<BaTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
