import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() cardTitle:string;
  @Input() cardDescription:string;
  @Input() cardImgSrc:string;
  @Input() cardImgAlt:string;
  @Input() price:number;
  @Output() sendDeleteCard = new EventEmitter<any>();
  @Output() sendEditCard = new EventEmitter<any>();

  sendEdit() {
    this.sendEditCard.emit()
  }

  sendDelete() {
    this.sendDeleteCard.emit()
  }
}
