import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", {static: false}) form: NgForm;
	defaultSub = 'Pro'
	subscriptions = ['Basic', 'Advanced', 'Pro']

  onSubmit() {
		console.log(this.form.value)
	}
}
