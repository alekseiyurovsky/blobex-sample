import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Widget} from "../../widget"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  appState: BehaviorSubject<string> = new BehaviorSubject<string>('data-choice');
  appData: BehaviorSubject<Array<Widget>>;
  activeWidget: BehaviorSubject<Widget>;

  constructor() { }
}
