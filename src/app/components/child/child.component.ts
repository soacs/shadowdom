import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Shadow DOM Child example works!';
  }

  ngOnInit() {
  }

}
