import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcomponantComponent } from './firstcomponant.component';

describe('FirstcomponantComponent', () => {
  let component: FirstcomponantComponent;
  let fixture: ComponentFixture<FirstcomponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstcomponantComponent]
    });
    fixture = TestBed.createComponent(FirstcomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
