import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
	activeToInactive = 0
	inactiveToActive = 0 

	add(type: string) {
		switch (type) {
			case 'ati': 
				this.activeToInactive++
				console.log('active to inactive count: ', this.activeToInactive)
				break
			case 'ita': 
				this.inactiveToActive++
				console.log('inactive to active count: ', this.inactiveToActive)
				break
		}
	}
}
