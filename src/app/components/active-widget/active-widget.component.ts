import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Widget} from "../../widget";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {forEach} from "@angular/router/src/utils/collection";



@Component({
    selector: 'app-active-widget',
    templateUrl: './active-widget.component.html',
    styleUrls: ['./active-widget.component.scss']
})
export class ActiveWidgetComponent implements OnInit {

    widget: Widget;
    form: FormGroup;

    constructor(
        private data: DataService
    ) { }

    ngOnInit() {
        this.data.activeWidget.subscribe(
            data => {
                this.widget = data;

                let formGroup: any = {};

                data.items.forEach((section, sectionIndex) => {

                    section.items.forEach((inputItem, inputIndex) => {

                        if (inputItem.required) {
                            formGroup[`${sectionIndex}-${inputIndex}-${inputItem.type}`] = new FormControl(inputItem.value, Validators.required);
                        } else {
                            formGroup[`${sectionIndex}-${inputIndex}-${inputItem.type}`] = new FormControl(inputItem.value);
                        }
                    })
                });

                this.form = new FormGroup(formGroup);
            }
        );
    }

    cancel(){
        this.data.appState.next('widgets');
    }

    save(){
        // Save changes logic here
    }

}
