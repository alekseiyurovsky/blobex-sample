import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    state: string;

    constructor(private dataService: DataService) {
    }

    // app entry point
    ngOnInit() {
        this.dataService.appState.subscribe(
            value => {
                this.state = value;
            }
        );
    }
}
