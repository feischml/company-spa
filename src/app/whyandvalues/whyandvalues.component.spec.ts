import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyandvaluesComponent } from './whyandvalues.component';

describe('WhyandvaluesComponent', () => {
  let component: WhyandvaluesComponent;
  let fixture: ComponentFixture<WhyandvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyandvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyandvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
