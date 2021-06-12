import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvetsComponent } from './formvets.component';

describe('FormvetsComponent', () => {
  let component: FormvetsComponent;
  let fixture: ComponentFixture<FormvetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
