import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataChoiceComponent} from "./components/data-choice/data-choice.component";
import {WidgetComponent} from "./components/widget/widget.component";
import {ActiveWidgetComponent} from "./components/active-widget/active-widget.component";
import {SectionComponent} from "./components/active-widget/section/section.component";
import {InputComponent} from "./components/active-widget/input/input.component";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AppComponent,
                DataChoiceComponent,
                WidgetComponent,
                ActiveWidgetComponent,
                SectionComponent,
                InputComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    // it(`should have as title 'blobex-sample'`, async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('blobex-sample');
    // }));
    //
    // it('should render title in a h1 tag', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to blobex-sample!');
    // }));

});
