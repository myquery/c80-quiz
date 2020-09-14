import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C80QuizComponent } from './c80-quiz.component';

describe('C80QuizComponent', () => {
  let component: C80QuizComponent;
  let fixture: ComponentFixture<C80QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C80QuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C80QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
