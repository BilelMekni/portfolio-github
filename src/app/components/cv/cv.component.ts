import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() inputCv:any;

  constructor() { }

  ngOnInit() {
  }

}
