import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon: string;
  @Output() sendClickEmitter = new EventEmitter<any>();

  sendClick() {
    this.sendClickEmitter.emit()
  }
}
