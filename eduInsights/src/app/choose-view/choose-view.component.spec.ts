import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseViewComponent } from './choose-view.component';

describe('ChooseViewComponent', () => {
  let component: ChooseViewComponent;
  let fixture: ComponentFixture<ChooseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
