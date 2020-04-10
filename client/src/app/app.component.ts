import { Component, OnInit } from '@angular/core';
import { AppData } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Curtis Lawn Cure';
  ngOnInit(): void {
    this.data.getMe().subscribe((data: any) => {
      this.title = data.name;
    });
  }
  constructor(private data: AppData) {}


}
