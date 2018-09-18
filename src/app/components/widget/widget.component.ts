import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Widget} from "../../widget";
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    widgets: Array<Widget>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(){
        this.data.appData.subscribe(
            data => {
                this.widgets = data;
            }
        );
    }

    openWidget(widget: Widget): void {
        this.data.activeWidget = new BehaviorSubject<Widget>(widget);
        this.data.appState.next('active-widget')
    }


}
