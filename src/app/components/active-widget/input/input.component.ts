import { Component, Input, OnInit } from '@angular/core';
import { SectionInput } from "../../../section-input";
import { FormGroup} from "@angular/forms";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() sectionInput: SectionInput;
    @Input() form: FormGroup;
    @Input() sectionIndex: number;
    @Input() inputIndex: number;
    constructor() { }

    ngOnInit() {
    }

}
