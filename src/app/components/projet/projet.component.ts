import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  @Input() inputProject: any;

  constructor() { }

  ngOnInit() {
  }

}
