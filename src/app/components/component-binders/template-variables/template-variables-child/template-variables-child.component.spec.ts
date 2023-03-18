import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablesChildComponent } from './template-variables-child.component';

describe('TemplateVariablesChildComponent', () => {
  let component: TemplateVariablesChildComponent;
  let fixture: ComponentFixture<TemplateVariablesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateVariablesChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateVariablesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
