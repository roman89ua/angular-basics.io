import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post4 title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quaerat.</p>
    </div>
  `,
  styles: [`
    .post4{
      padding: 0.5rem;
      border: 2px solid black;
    }
    h2{
      font-size: 1rem;
    }
  `]
})
export class Post4Component {

}


