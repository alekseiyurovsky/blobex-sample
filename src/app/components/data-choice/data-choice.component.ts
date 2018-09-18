import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-data-choice',
  templateUrl: './data-choice.component.html',
  styleUrls: ['./data-choice.component.scss']
})
export class DataChoiceComponent implements OnInit {

  dataChoice: string;
  urlString: string;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    // this.api.getRequest('./src/data/data.json').subscribe(data => {
    //   console.log(data)
    // });
  }

  isButtonDisabled(): boolean {
    let isvalid = this.dataChoice === 'local' || !!this.urlString;
    return !isvalid;
  }

  loadData(): void {
    // check for url validity should be implemented
    let url: string = this.dataChoice === 'local' ? './src/data/data.json' : this.urlString;
    this.api.getRequest(url).subscribe(data => {
      console.log(data)
    });
  }

}
