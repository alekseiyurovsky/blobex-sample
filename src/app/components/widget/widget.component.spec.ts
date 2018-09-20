import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DataService} from "../../services/data/data.service";

import { WidgetComponent } from './widget.component';

let mockDataService = {
    appData: { subscribe: () => {} }
};

describe('WidgetComponent', () => {
    let component: WidgetComponent;
    let fixture: ComponentFixture<WidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetComponent ],
            providers: [
                {
                    provide: DataService, useValue: mockDataService
                }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
