import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterFunComponent } from './event-emitter-fun.component';

describe('EventEmitterFunComponent', () => {
  let component: EventEmitterFunComponent;
  let fixture: ComponentFixture<EventEmitterFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitterFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEmitterFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
