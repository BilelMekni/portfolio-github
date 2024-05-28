import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-two',
  templateUrl: './cv-two.component.html',
  styleUrls: ['./cv-two.component.css']
})
export class CvTwoComponent implements OnInit {
  @Input() inputCvtwo:any;

  constructor() { }

  ngOnInit() {
  }

}
