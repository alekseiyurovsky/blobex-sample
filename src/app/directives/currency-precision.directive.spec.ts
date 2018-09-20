import { CurrencyPrecisionDirective } from './currency-precision.directive';
import { Component, DebugElement } from "@angular/core";
import {By} from "@angular/platform-browser";
import { ElementRef } from "@angular/core";
import { CurrencyPipe} from "../pipes/currency.pipe";
import { TestBed, ComponentFixture } from "@angular/core/testing";


@Component({
    selector: 'test-component',
    template: `<input type="text" value="100000.990" appCurrencyPrecision/>`
})
class TestComponent {}

describe('CurrencyPrecisionDirective', () => {

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                CurrencyPrecisionDirective
            ],
            providers: [
                {
                    provide: CurrencyPipe, useValue: new CurrencyPipe()
                }
            ]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    it('should create an instance', () => {
        const directive = new CurrencyPrecisionDirective(
            new ElementRef(null),
            new CurrencyPipe()
        );
        expect(directive).toBeTruthy();
    });

    it('formatting input value upon focus and blur', () => {
        inputEl.triggerEventHandler('focus', null);
        inputEl.triggerEventHandler('blur', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.value).toBe('100\'000.99');
    });
});
