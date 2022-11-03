import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDetailsComponent } from './fashion-details.component';

describe('FashionDetailsComponent', () => {
  let component: FashionDetailsComponent;
  let fixture: ComponentFixture<FashionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
