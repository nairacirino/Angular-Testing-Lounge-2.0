import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-fun',
  templateUrl: './ngif-fun.component.html',
  styleUrls: ['./ngif-fun.component.scss']
})
export class NgifFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgIf";
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
