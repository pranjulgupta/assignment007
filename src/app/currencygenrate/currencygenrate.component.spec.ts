import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencygenrateComponent } from './currencygenrate.component';

describe('CurrencygenrateComponent', () => {
  let component: CurrencygenrateComponent;
  let fixture: ComponentFixture<CurrencygenrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencygenrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencygenrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
