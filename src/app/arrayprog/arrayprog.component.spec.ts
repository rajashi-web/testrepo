import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayprogComponent } from './arrayprog.component';

describe('ArrayprogComponent', () => {
  let component: ArrayprogComponent;
  let fixture: ComponentFixture<ArrayprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
