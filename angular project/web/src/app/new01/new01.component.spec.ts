import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New01Component } from './new01.component';

describe('New01Component', () => {
  let component: New01Component;
  let fixture: ComponentFixture<New01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ New01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
