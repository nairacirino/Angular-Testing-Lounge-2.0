import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateFunComponent } from './ngtemplate-fun.component';

describe('NgtemplateFunComponent', () => {
  let component: NgtemplateFunComponent;
  let fixture: ComponentFixture<NgtemplateFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemplateFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
