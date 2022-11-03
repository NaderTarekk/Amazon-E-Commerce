import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorComponent } from './decor.component';

describe('DecorComponent', () => {
  let component: DecorComponent;
  let fixture: ComponentFixture<DecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
