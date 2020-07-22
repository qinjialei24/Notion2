import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuSidebarComponent } from './bu-sidebar.component';

describe('BuSidebarComponent', () => {
  let component: BuSidebarComponent;
  let fixture: ComponentFixture<BuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
