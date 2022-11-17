import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFontAwesomeComponent } from './icon-font-awesome.component';

describe('IconFontAwesomeComponent', () => {
  let component: IconFontAwesomeComponent;
  let fixture: ComponentFixture<IconFontAwesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFontAwesomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFontAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
