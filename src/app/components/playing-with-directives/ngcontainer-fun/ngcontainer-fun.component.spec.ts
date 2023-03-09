import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontainerFunComponent } from './ngcontainer-fun.component';

describe('NgcontainerFunComponent', () => {
  let component: NgcontainerFunComponent;
  let fixture: ComponentFixture<NgcontainerFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontainerFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcontainerFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
