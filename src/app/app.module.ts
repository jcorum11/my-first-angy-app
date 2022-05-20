import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {WarningMessageComponent} from './warning-message/warning-message.component';
import {SuccessMessageComponent} from './success-message/success-message.component';
import {FormsModule} from '@angular/forms';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningMessageComponent,
    SuccessMessageComponent,
    AssignmentThreeComponent
  ],
  // add other modules to this module to keep things lean.
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
