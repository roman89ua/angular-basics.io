import { Component, OnInit } from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  currentDate: Data = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
