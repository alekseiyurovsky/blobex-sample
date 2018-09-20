import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataChoiceComponent } from './data-choice.component';
import {HttpClientModule} from "@angular/common/http";

describe('DataChoiceComponent', () => {
    let component: DataChoiceComponent;
    let fixture: ComponentFixture<DataChoiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DataChoiceComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataChoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
