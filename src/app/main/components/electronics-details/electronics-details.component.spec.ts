import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsDetailsComponent } from './electronics-details.component';

describe('ElectronicsDetailsComponent', () => {
  let component: ElectronicsDetailsComponent;
  let fixture: ComponentFixture<ElectronicsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
