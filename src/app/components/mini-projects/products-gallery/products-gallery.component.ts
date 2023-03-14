import { Component } from '@angular/core';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent {

  title: string = "Products Catalog";

  products = [
    {
      title: "Cleansing Gel",
      description: "Makes your face look radiant",
      imgSrc: "../../../../../assets/img/cosmetics/1.jpg",
      imgAlt: "picture of a cleansing gel tube",
      price: 29.90,
    },
    {
      title: "Face Tonic",
      description: "Makes your face look radiant",
      imgSrc: "../../../../../assets/img/cosmetics/2.jpg",
      imgAlt: "picture of a face tonic bottle",
      price: 19.90,
    },
    {
      title: "Eau de Toilette",
      description: "Floral fragrance for your splendor",
      imgSrc: "../../../../../assets/img/cosmetics/3.jpg",
      imgAlt: "picture of a perfume bottle",
      price: 59.90,
    },
    {
      title: "Moisturizer",
      description: "Makes your face look radiant",
      imgSrc: "../../../../../assets/img/cosmetics/4.jpg",
      imgAlt: "picture of a moisturizer tube",
      price: 19.90,
    },
    {
      title: "Eau de Toilette",
      description: "Sweet fragrance for your splendor",
      imgSrc: "../../../../../assets/img/cosmetics/5.jpg",
      imgAlt: "picture of a perfume bottle",
      price: 69.90,
    },
    {
      title: "Eyeshadow",
      description: "The better highlight for your eyes",
      imgSrc: "../../../../../assets/img/cosmetics/6.jpg",
      imgAlt: "picture of an eyeshadow",
      price: 15.90,
    },
    {
      title: "Facial Duo",
      description: "Makes your face look radiant",
      imgSrc: "../../../../../assets/img/cosmetics/7.jpg",
      imgAlt: "picture of two facial products",
      price: 110.90,
    },
    {
      title: "Makeup Brushes",
      description: "The best for your art in makeup",
      imgSrc: "../../../../../assets/img/cosmetics/8.jpg",
      imgAlt: "picture of several makeup brushes",
      price: 39.90,
    },
    {
      title: "Eyeshadow",
      description: "The better highlight for your eyes",
      imgSrc: "../../../../../assets/img/cosmetics/9.jpg",
      imgAlt: "picture of an eyeshadow",
      price: 15.90,
    },
    {
      title: "Body Duo",
      description: "Body lotion and scrub",
      imgSrc: "../../../../../assets/img/cosmetics/10.jpg",
      imgAlt: "picture of two body products",
      price: 79.90,
    },
    {
      title: "Cologne",
      description: "Fresh scent for your day-to-day errands",
      imgSrc: "../../../../../assets/img/cosmetics/11.jpg",
      imgAlt: "picture of a perfume bottle",
      price: 69.90,
    },
    {
      title: "Body Lotion",
      description: "Makes your skin look radiant",
      imgSrc: "../../../../../assets/img/cosmetics/12.jpg",
      imgAlt: "picture of a body lotion bottle",
      price: 49.90,
    }
  ]

  deleteIt() {
    console.log("binding delete works")
  }

  editIt() {
    console.log("binding edit works")
  }
}
