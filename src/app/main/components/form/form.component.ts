import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  theValue = new FormControl()
  profile!: FormGroup
  Form!: FormGroup
  success: boolean = false
  constructor(private fb: FormBuilder) {
    this.profile = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      email: ['', [Validators.email, Validators.pattern(".*com$")]],
    })
    this.profile.valueChanges.subscribe(res => {
      if (isNaN(res.lastName)) {
        this.profile.patchValue({
          lastName: res.lastName.replace(/[a-zA-z]/g, '')
        })
      }
    })

    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(".*com$")]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })


  }

  get email() {
    return this.Form.get('email')
  }

  get password() {
    return this.Form.get('password')
  }

  submit() {
    console.log(this.profile.value)
  }

  update() {
    this.profile.setValue({
      firstName: '',
      lastName: '',
      email: '',
    })
    this.email?.disable()
    setTimeout(() => {
      this.email?.enable()
    }, 1000);
  }

  onSubmit() {
    setTimeout(() => {
      this.success = true
    }, 1500);
  }
}
