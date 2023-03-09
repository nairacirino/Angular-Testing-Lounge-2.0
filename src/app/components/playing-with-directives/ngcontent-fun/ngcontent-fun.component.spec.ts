import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentFunComponent } from './ngcontent-fun.component';

describe('NgcontentFunComponent', () => {
  let component: NgcontentFunComponent;
  let fixture: ComponentFixture<NgcontentFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcontentFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
