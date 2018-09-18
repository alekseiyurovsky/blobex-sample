import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWidgetComponent } from './active-widget.component';

describe('ActiveWidgetComponent', () => {
  let component: ActiveWidgetComponent;
  let fixture: ComponentFixture<ActiveWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
