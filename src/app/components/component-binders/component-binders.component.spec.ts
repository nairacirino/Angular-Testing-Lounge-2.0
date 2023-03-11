import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBindersComponent } from './component-binders.component';

describe('ComponentBindersComponent', () => {
  let component: ComponentBindersComponent;
  let fixture: ComponentFixture<ComponentBindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
