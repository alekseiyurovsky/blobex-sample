import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SectionComponent } from './section.component';
import {InputComponent} from "../input/input.component";
import { SectionInput } from "../../../section-input";
import { Section } from "../../../section";

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

let formBuilder: FormBuilder = new FormBuilder();

describe('SectionComponent', () => {
    let component: SectionComponent;
    let fixture: ComponentFixture<SectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: FormBuilder, useValue: formBuilder
                }
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                SectionComponent,
                InputComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionComponent);
        component = fixture.componentInstance;
        component.sectionIndex = 0;
        component.section = mockSection;
        component.form = formBuilder.group({
            '0-0-input': null
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
