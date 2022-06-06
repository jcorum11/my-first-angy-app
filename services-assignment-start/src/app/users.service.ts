import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	userSetToInactive = new EventEmitter<number>()
  constructor() { }

  setToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
