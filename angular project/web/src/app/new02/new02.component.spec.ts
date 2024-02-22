import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New02Component } from './new02.component';

describe('New02Component', () => {
  let component: New02Component;
  let fixture: ComponentFixture<New02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ New02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
