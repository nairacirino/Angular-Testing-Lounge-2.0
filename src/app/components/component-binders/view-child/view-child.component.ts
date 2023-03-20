import { Component, ViewChild } from '@angular/core';
import { TemplateVariablesChildComponent } from '../template-variables/template-variables-child/template-variables-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  // Método 1: Usando o tipo de componente
  @ViewChild(TemplateVariablesChildComponent)
  private clickIt : TemplateVariablesChildComponent;

  clickButton() {
    this.clickIt.childMethod();
  }

  // Método 2: Usando a template variable como identificador
  @ViewChild("childComponent2")
  private clickIt2 : TemplateVariablesChildComponent;

  clickSecondButton() {
    this.clickIt2.childMethod();
  }

}
