import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesConverterComponent } from './currencies-converter.component';

describe('CurrenciesConverterComponent', () => {
  let component: CurrenciesConverterComponent;
  let fixture: ComponentFixture<CurrenciesConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
