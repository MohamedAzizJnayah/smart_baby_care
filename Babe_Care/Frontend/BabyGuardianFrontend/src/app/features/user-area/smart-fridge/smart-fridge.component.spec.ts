import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFridgeComponent } from './smart-fridge.component';

describe('SmartFridgeComponent', () => {
  let component: SmartFridgeComponent;
  let fixture: ComponentFixture<SmartFridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartFridgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
