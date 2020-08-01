import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic title!';
  // number = 42;
  // arr = [1, 2, 3, 4];
  // obj = {a: 1, b: {c: 2}};
  // one way binding;
  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png';
  // inputValue = '';
  constructor() {
    // setTimeout(() => {
    // tslint:disable-next-line:max-line-length
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
    // }, 5000);
  }
  // onInput(event): void{
  //   console.log(event);
  //   this.inputValue = event.target.value;
  // }
}
