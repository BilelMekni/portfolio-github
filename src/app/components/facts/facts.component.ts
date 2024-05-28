import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  interest : any = [
    {title:"Sport" , avatar:"assets/img/sport.png"},
    {title:"Camping" , avatar:"assets/img/camp.jpg"},
    {title:"Music" , avatar:"assets/img/music.avif"},
    {title:"Lecture" , avatar:"assets/img/lecture.webp"}


  ]

  constructor() { }

  ngOnInit() {
  }

}
