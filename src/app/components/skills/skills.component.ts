import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  competents : any =[
    {title:"HTML" , purcentage:"90%" , logo:"assets/img/html.png"},
    {title:"CSS" , purcentage:"90%" , logo:"assets/img/css.png"},
    {title:"BOOTSTRAP" , purcentage:"90%" , logo:"assets/img/bootstrap.png"},
    {title:"JAVASCRIPT" , purcentage:"90%" , logo:"assets/img/js.png"},
    {title:"ANGULAR" , purcentage:"90%" , logo:"assets/img/angular.webp"},
    {title:"PHP" , purcentage:"90%" , logo:"assets/img/php.png"},
    {title:"NODE JS" , purcentage:"90%" , logo:"assets/img/nodejs.jpg"},
    {title:"EXPRESS JS" , purcentage:"90%" , logo:"assets/img/express.png"},
    {title:"SCRUM" , purcentage:"90%" , logo:"assets/img/scrum.jpg"},
    {title:"UML" , purcentage:"90%" , logo:"assets/img/uml.png"},
    {title:"ORACLE" , purcentage:"90%" , logo:"assets/img/oracle.jpg"},
    {title:"MYSQL" , purcentage:"90%" , logo:"assets/img/maysql.png"},
    {title:"MONGODB" , purcentage:"90%" , logo:"assets/img/mongodb.png"}
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
