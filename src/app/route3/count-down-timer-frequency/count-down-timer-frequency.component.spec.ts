import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerFrequencyComponent } from './count-down-timer-frequency.component';

describe('CountDownTimerFrequencyComponent', () => {
  let component: CountDownTimerFrequencyComponent;
  let fixture: ComponentFixture<CountDownTimerFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerFrequencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
