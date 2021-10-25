import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerLogsComponent } from './count-down-timer-logs.component';

describe('CountDownTimerLogsComponent', () => {
  let component: CountDownTimerLogsComponent;
  let fixture: ComponentFixture<CountDownTimerLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
