import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchFunComponent } from './ngswitch-fun.component';

describe('NgswitchFunComponent', () => {
  let component: NgswitchFunComponent;
  let fixture: ComponentFixture<NgswitchFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
