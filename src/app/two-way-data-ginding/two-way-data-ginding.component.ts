import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-ginding',
  templateUrl: './two-way-data-ginding.component.html',
  styleUrls: ['./two-way-data-ginding.component.scss']
})
export class TwoWayDataGindingComponent implements OnInit {
  title = '';
  formsModuleTitle = '';
  constructor() { }

  ngOnInit(): void {
  }
  onInput(event: any): void{
    this.title = event.target.value;
  }
}
