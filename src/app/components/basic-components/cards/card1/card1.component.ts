import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {

  @Input() cardTitle:string;
  @Input() cardDescription:string;
  @Input() cardImgSrc:string;
  @Input() cardImgAlt:string;
}
