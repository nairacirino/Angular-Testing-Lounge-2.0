import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-fun',
  templateUrl: './ngclass-fun.component.html',
  styleUrls: ['./ngclass-fun.component.scss']
})
export class NgclassFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgClass";

  classname: string = "initial";
}
