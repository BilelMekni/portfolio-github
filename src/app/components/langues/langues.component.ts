import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.css']
})
export class LanguesComponent implements OnInit {
  @Input() inputLangues: any;

  constructor() { }

  ngOnInit() {
  }

}
