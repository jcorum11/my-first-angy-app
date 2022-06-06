import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output() incrementEvent = new EventEmitter<number>()
	start: boolean 
	number = 0 
	buttonText = 'Start'
	nIntervalId = null

	constructor() { }

  ngOnInit(): void {
		this.start = false
  }

	increment() {
		this.number += 1
		this.incrementEvent.emit(this.number)
	}

	onClick() {
		this.start = !this.start
		if (this.start) {
			this.buttonText = 'Stop'
			this.nIntervalId = setInterval(() => this.increment(), 1000)
		} else {
			this.buttonText = 'Start'
			clearInterval(this.nIntervalId)
			this.nIntervalId = null
		}
	}
}
