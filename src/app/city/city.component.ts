import {Component} from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: [
    './city.component.scss'
  ]
})
export class CityComponent {

  public title = 'Title';

  getInfo(t: string): string {
    return 'getInfo';
  }
}
