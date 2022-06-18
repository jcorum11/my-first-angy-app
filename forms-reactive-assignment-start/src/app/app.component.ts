import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      projectData: new FormGroup({
        projectName: new FormControl(
          null,
          [Validators.required],
          this.forbiddenNames
        ),
        email: new FormControl(null, [Validators.required, Validators.email]),
        projectStatus: new FormControl(null),
      }),
    });
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
