import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidBookComponent } from './invalid-book.component';

describe('InvalidBookComponent', () => {
  let component: InvalidBookComponent;
  let fixture: ComponentFixture<InvalidBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
