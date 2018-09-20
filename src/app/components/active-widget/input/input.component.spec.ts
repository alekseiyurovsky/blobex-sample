import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { InputComponent } from './input.component';
import { SectionInput } from "../../../section-input"

let mockSectionInput = new SectionInput(
    'input',
    'testLabel',
    'mockValue'
);

let formBuilder: FormBuilder = new FormBuilder();

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

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
                InputComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.sectionInput = mockSectionInput;
        component.sectionIndex = 0;
        component.inputIndex = 0;
        component.form = formBuilder.group({
            '0-0-input': null
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
