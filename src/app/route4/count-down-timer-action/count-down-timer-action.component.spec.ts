import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerActionComponent } from './count-down-timer-action.component';

describe('CountDownTimerActionComponent', () => {
  let component: CountDownTimerActionComponent;
  let fixture: ComponentFixture<CountDownTimerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
