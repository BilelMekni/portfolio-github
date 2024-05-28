import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.css']
})
export class InteretComponent implements OnInit {
  @Input() inputInterest : any;

  constructor() { }

  ngOnInit() {
  }

}
