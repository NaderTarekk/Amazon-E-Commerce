import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  Form!: FormGroup
  success: boolean = false
  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      password1: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    }, {
      validators: this.Match('password1', 'password2')
    })
  }

  Match(password: any, confPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const confPasswordControl = formGroup.controls[confPassword]

      if (confPasswordControl.errors && !confPasswordControl.errors['Match']) {
        return;
      }
      if (passwordControl.value !== confPasswordControl.value) {
        return confPasswordControl.setErrors({ Match: true })
      } else {
        confPasswordControl.setErrors(null)
      }
    }
  }

  get name() {
    return this.Form.get('name')
  }

  get email() {
    return this.Form.get('email')
  }

  get password1() {
    return this.Form.get('password1')
  }

  get password2() {
    return this.Form.get('password2')
  }

  ngOnInit(): void {
  }
  signUp() {
    setTimeout(() => {
      this.success = true
    }, 1500);
  }

}
