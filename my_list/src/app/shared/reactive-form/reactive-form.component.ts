import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public userForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private formbuilder: FormBuilder) {
    this.isSubmitted = false
    this.userForm = this.formbuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    })


  }

  ngOnInit(): void {
  }
  get userFormControls() {
    return this.userForm.controls;
  }

  getFormData() {

    this.userForm.value;
    console.log(this.userForm);
  }

}
