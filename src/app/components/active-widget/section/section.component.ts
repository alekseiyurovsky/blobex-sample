import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Section} from "../../../section"

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

    @Input() section: Section;
    @Input() form: FormGroup;
    @Input() sectionIndex: number;
    constructor() { }

    ngOnInit() {
    }

}
