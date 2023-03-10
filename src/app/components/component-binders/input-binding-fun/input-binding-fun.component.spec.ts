import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingFunComponent } from './input-binding-fun.component';

describe('InputBindingFunComponent', () => {
  let component: InputBindingFunComponent;
  let fixture: ComponentFixture<InputBindingFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBindingFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindingFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
