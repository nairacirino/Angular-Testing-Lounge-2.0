import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate-fun',
  templateUrl: './ngtemplate-fun.component.html',
  styleUrls: ['./ngtemplate-fun.component.scss']
})
export class NgtemplateFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgTemplate";
  selectStatus: boolean = false;
  classname: string = "initial-class";
  classes: any = [
    {
      title: "Nova Cor",
      value: "novacor"
    },
    {
      title: "Novo Tamanho",
      value: "novotamanho"
    },
  ];

}
