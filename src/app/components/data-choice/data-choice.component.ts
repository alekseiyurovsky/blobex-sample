import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { DataService } from "../../services/data/data.service";
import { BehaviorSubject } from 'rxjs';

import {Widget} from "../../widget"

@Component({
    selector: 'app-data-choice',
    templateUrl: './data-choice.component.html',
    styleUrls: ['./data-choice.component.scss']
})
export class DataChoiceComponent implements OnInit {

    dataChoice: string;
    urlString: string;

    constructor(
        private api: ApiService,
        private data: DataService
    ) {}

    ngOnInit() {}

    isButtonDisabled(): boolean {
        let isvalid = this.dataChoice === 'local' || !!this.urlString;
        return !isvalid;
    }

    loadData(): void {
        // check for url validity should be implemented
        let url: string = this.dataChoice === 'local' ? './src/data/data.json' : this.urlString;

        this.api.getRequest(url).subscribe(data => {

            this.data.appData = new BehaviorSubject<Array<Widget>>(data.widgets);
            this.data.appState.next('widgets')

        }, error => {
            // responce error handling
            console.log(error);
        });
    }

}
