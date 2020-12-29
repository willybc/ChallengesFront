import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodRequestComponent } from './pod-request.component';

describe('PodRequestComponent', () => {
  let component: PodRequestComponent;
  let fixture: ComponentFixture<PodRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
