import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatureComponent } from './depature.component';

describe('DepatureComponent', () => {
  let component: DepatureComponent;
  let fixture: ComponentFixture<DepatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
