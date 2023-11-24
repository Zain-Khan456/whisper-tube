import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarayComponent } from './summaray.component';

describe('SummarayComponent', () => {
  let component: SummarayComponent;
  let fixture: ComponentFixture<SummarayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummarayComponent]
    });
    fixture = TestBed.createComponent(SummarayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
