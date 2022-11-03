import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDetailsComponent } from './toy-details.component';

describe('ToyDetailsComponent', () => {
  let component: ToyDetailsComponent;
  let fixture: ComponentFixture<ToyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
