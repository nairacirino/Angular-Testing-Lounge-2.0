import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleFunComponent } from './ngstyle-fun.component';

describe('NgstyleFunComponent', () => {
  let component: NgstyleFunComponent;
  let fixture: ComponentFixture<NgstyleFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
