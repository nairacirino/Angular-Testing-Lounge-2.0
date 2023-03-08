import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-fun',
  templateUrl: './ngfor-fun.component.html',
  styleUrls: ['./ngfor-fun.component.scss']
})
export class NgforFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgFor"
  classname: string = "initial-class"
  classes: any = [
    {
      title: "Nova Cor",
      value: "novacor"
    },
    {
      title: "Novo Tamanho",
      value: "novotamanho"
    },
  ]
}
