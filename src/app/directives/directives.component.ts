import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  flagToToggle = false;
  toggle = false;
  ngSwitchToggle;

  forNgFor = [1, 1, 2, 3, 5, 8, 13, 21];
  objs = [
    {title: 'Post#1', author: 'Roman', comments: [
        {name: 'Ivan', text: 'lorem1'},
        {name: 'Ivan', text: 'lorem2'},
        {name: 'Ivan', text: 'lorem3'}
      ]},
    {title: 'Post#2', author: 'Roman', comments: [
        {name: 'Galina', text: 'lorem1'},
        {name: 'Galina', text: 'lorem2'},
        {name: 'Galina', text: 'lorem3'}
      ]}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
