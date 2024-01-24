import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcustomerComponent } from './bankcustomer.component';

describe('BankcustomerComponent', () => {
  let component: BankcustomerComponent;
  let fixture: ComponentFixture<BankcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankcustomerComponent]
    });
    fixture = TestBed.createComponent(BankcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
