import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataChoiceComponent } from './components/data-choice/data-choice.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ActiveWidgetComponent } from './components/active-widget/active-widget.component';
import { SectionComponent } from './components/active-widget/section/section.component';
import { InputComponent } from './components/active-widget/input/input.component';
import { CurrencyPrecisionDirective } from './directives/currency-precision.directive';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
    declarations: [
        AppComponent,
        DataChoiceComponent,
        WidgetComponent,
        ActiveWidgetComponent,
        SectionComponent,
        InputComponent,
        CurrencyPrecisionDirective,
        CurrencyPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [CurrencyPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
