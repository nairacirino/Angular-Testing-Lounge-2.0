import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: any[];
  @Output() sendSelectedValue = new EventEmitter<any>();

  selectedOption: any;

  sendSelected() {
    this.sendSelectedValue.emit();
  }

}
