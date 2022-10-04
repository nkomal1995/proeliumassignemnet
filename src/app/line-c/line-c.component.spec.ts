import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCComponent } from './line-c.component';

describe('LineCComponent', () => {
  let component: LineCComponent;
  let fixture: ComponentFixture<LineCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
