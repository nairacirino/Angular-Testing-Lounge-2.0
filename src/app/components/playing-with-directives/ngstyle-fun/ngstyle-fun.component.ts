import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-fun',
  templateUrl: './ngstyle-fun.component.html',
  styleUrls: ['./ngstyle-fun.component.scss']
})
export class NgstyleFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgStyle";
  fontSize: string = "initial";
  fontColor: string[] = ["red", "blue", "black", "purple", "green"];
  fontSizeOptions: string[] = ["12px","16px","20px","24px","28px"];
  fontColorOptions: string[] = ["red", "blue", "black", "purple", "green"];
}
