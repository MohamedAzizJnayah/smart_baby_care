import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFoodComponent } from './share-food.component';

describe('ShareFoodComponent', () => {
  let component: ShareFoodComponent;
  let fixture: ComponentFixture<ShareFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
