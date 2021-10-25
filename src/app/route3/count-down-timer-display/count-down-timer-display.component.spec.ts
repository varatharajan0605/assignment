import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerDisplayComponent } from './count-down-timer-display.component';

describe('CountDownTimerDisplayComponent', () => {
  let component: CountDownTimerDisplayComponent;
  let fixture: ComponentFixture<CountDownTimerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
