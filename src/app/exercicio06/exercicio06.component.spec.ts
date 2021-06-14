import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeisComponent } from './exercicio06.component';

describe('SeisComponent', () => {
  let component: SeisComponent;
  let fixture: ComponentFixture<SeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
