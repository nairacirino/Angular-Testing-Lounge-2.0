import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforFunComponent } from './ngfor-fun.component';

describe('NgforFunComponent', () => {
  let component: NgforFunComponent;
  let fixture: ComponentFixture<NgforFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
