import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTwoComponent } from './cv-two.component';

describe('CvTwoComponent', () => {
  let component: CvTwoComponent;
  let fixture: ComponentFixture<CvTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
