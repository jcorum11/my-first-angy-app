import {Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
	// newServerName = '';
  // newServerContent = '';
	@ViewChild('serverContent', {static: true}) serverContentInput: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
		console.log(this.serverContentInput);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
}
