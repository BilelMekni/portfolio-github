import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  projects: any = [
    { title: "Automobile", technologie: " ANGULAR , NODEJS", year: "2024", images: "assets/img/auto.jpg" },
    { title: "Vente En Ligne", technologie: " ANGULAR , NODEJS", year: "2024", images: "assets/img/vente.png" },
    { title: "Gestion D’une Ecole", technologie: " ANGULAR , NODEJS", year: "2023", images: "assets/img/ecole.png" },
    { title: "Prise De Rendez-Vous", technologie: " ANGULAR , NODEJS", year: "2023", images: "assets/img/clinique.avif" },
    { title: " Mise En Relation", technologie: " ANGULAR , NODEJS", year: "2023", images: "assets/img/relation.png" },
    { title: "Sport", technologie: " ANGULAR , NODEJS", year: "2023", images: "assets/img/sp.png" },
    { title: "Restaurant ", technologie: " ANGULAR , NODEJS", year: "2023", images: "assets/img/rest.jpg" },
    { title: "Maison D’hôte", technologie: "  HTML , CSS , BOOTSTRAP , JAVASCRIPT", year: "2022", images: "assets/img/maison.jpg" },
    { title: "E-Commerce ", technologie: "  HTML , CSS , BOOTSTRAP , JAVASCRIPT", year: "2022", images: "assets/img/ecommerce.avif" }
    

  ]

  constructor() { }

  ngOnInit() {
  }

}
