import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = ''
  username = ''
  resetUsernameStatus = 'Cannot reset!'
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onResetUsername() {
    this.username = ''
    this.resetUsernameStatus = 'Username reset!'
  }
}
