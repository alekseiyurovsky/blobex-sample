import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActiveWidgetComponent } from './active-widget.component';
import {SectionComponent} from "./section/section.component";
import {InputComponent} from "./input/input.component";
import {DataService} from "../../services/data/data.service";
import {Widget} from "../../widget";
import {Section} from "../../section";
import {SectionInput} from "../../section-input";

let mockSectionInput = new SectionInput(
    'input',
    'testLabel',
    'mockValue'
);

let mockSection = new Section(
    'input',
    'testLabel',
    2,
    [mockSectionInput]
);

let mockWidget = new Widget(
    5005,
    'mockName',
    'form',
    [mockSection]
);

let mockDataService = {
    activeWidget: { subscribe: () => {} }
};

let formBuilder: FormBuilder = new FormBuilder();


describe('ActiveWidgetComponent', () => {
    let component: ActiveWidgetComponent;
    let fixture: ComponentFixture<ActiveWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DataService, useValue: mockDataService
                },
                {
                    provide: FormBuilder, useValue: formBuilder
                }
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                ActiveWidgetComponent,
                SectionComponent,
                InputComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActiveWidgetComponent);
        component = fixture.componentInstance;
        component.widget = mockWidget;
        component.form = formBuilder.group({
            '0-0-input': null
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
