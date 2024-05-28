import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
@Input() inputCompetence : any;
  constructor() { }

  ngOnInit() {
  }

}
