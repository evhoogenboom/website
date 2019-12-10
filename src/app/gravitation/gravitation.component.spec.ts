import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationComponent } from './gravitation.component';

describe('GravitationComponent', () => {
  let component: GravitationComponent;
  let fixture: ComponentFixture<GravitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
