import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorDetailsComponent } from './decor-details.component';

describe('DecorDetailsComponent', () => {
  let component: DecorDetailsComponent;
  let fixture: ComponentFixture<DecorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
