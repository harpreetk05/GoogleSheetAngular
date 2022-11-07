import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enterName = "Harpreet";
  parentData = "";

  TransferData() {
  this.parentData = this.enterName;
  }
}
