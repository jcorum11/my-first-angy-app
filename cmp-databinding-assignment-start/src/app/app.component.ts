import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	numberList = []
	addItem(num: number) {
		this.numberList.push(num)	
	}
}

