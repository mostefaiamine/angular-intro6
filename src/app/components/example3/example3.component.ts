import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class Example3Component implements OnInit {

  opened = false;

  title = 'Show the menu';

  constructor() { }

  ngOnInit() {
  }

  showOrHide() {
    this.opened = !this.opened;
    if (this.opened) {
      this.title = 'Hide the menu';
    } else {
      this.title = 'Show the menu';
    }
  }

}
