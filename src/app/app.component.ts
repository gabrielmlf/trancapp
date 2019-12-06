import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  aberto: boolean;
  constructor() {
  }
  ngOnInit() {
    this.aberto = true;
  }
}
