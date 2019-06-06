import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidBookComponent } from './valid-book.component';

describe('ValidBookComponent', () => {
  let component: ValidBookComponent;
  let fixture: ComponentFixture<ValidBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
