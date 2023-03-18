import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables-child',
  templateUrl: './template-variables-child.component.html',
  styleUrls: ['./template-variables-child.component.scss']
})
export class TemplateVariablesChildComponent {

  clicked: number= 0;

  childMethod() {
    console.log("Binding Works")
    this.clicked++
  }

}
