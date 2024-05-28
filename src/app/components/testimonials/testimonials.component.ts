import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  languages : any = [
    {title:"Arabe" , description:"Langue Maternelle" , images:"assets/img/arab.png"},
    {title:" Français " , description:"Bien" , images:"assets/img/fr.png"},
    {title:"Anglais" , description:"Passable" , images:"assets/img/anglais.webp"}

  ] 

  constructor() { }

  ngOnInit() {
  }

}
