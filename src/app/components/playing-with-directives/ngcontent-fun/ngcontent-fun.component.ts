import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontent-fun',
  templateUrl: './ngcontent-fun.component.html',
  styleUrls: ['./ngcontent-fun.component.scss']
})
export class NgcontentFunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "NgContent";
  selectedtype: string = "";
  types: string[] = ["Plant", "Food"]
  products: any = [
    {
      type: "Plant",
      product: "Rose",
      description: "A rose is either a woody perennial flowering plant of the genus Rosa in the family Rosaceae or the flower it bears. (Wikipedia, 2023)",
      imgsrc: "../../../../assets/img/flowers/2.jpg",
      imgalt: "Photo of Roses",
    },
    {
      type: "Plant",
      product: "Hydrangea",
      description: "Hydrangea commonly named the hortensia, is a genus of over 75 species of flowering plants native to Asia and the Americas. (Wikipedia, 2023)",
      imgsrc: "../../../../assets/img/flowers/3.jpg",
      imgalt: "Photo of Hydrangeas",
    },
    {
      type: "Food",
      product: "Salad",
      description: "A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served at room temperature or chilled. (Wikipedia, 2023)",
      imgsrc: "../../../../assets/img/food/1.jpg",
      imgalt: "Photo of a Salad",
    },
    {
      type: "Food",
      product: "Pancake",
      description: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter. (Wikipedia, 2023)",
      imgsrc: "../../../../assets/img/food/2.jpg",
      imgalt: "Photo of a Pancake",
    }
  ]
}
