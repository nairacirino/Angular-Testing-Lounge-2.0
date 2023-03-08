import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifFunComponent } from './ngif-fun.component';

describe('NgifFunComponent', () => {
  let component: NgifFunComponent;
  let fixture: ComponentFixture<NgifFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
