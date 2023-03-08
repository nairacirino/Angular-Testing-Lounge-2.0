import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassFunComponent } from './ngclass-fun.component';

describe('NgclassFunComponent', () => {
  let component: NgclassFunComponent;
  let fixture: ComponentFixture<NgclassFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
