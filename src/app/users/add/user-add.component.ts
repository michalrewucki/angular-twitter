import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {User} from "../../shared/model/user";

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  private NO_SPECIAL_CHARACTERS = "[a-zA-Z0-9]*";
  userForm: FormGroup;
  user = new User("", "");
  active = true;

  constructor(private userService : UserService,
  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    let value = this.userForm.value;
    this.userService.add(new User(value.name, value.username));
    this.userForm.reset();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'name': [this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
        Validators.pattern(this.NO_SPECIAL_CHARACTERS)
      ]],
      'username': [this.user.username, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
        Validators.pattern(this.NO_SPECIAL_CHARACTERS),
        this.uniqueNameValidator(this.userService)
      ]]
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  uniqueNameValidator(userService : UserService): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      return userService.nameExists(name) ? {'uniqueName': {name}} : null;
    };
  }

  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'username': ''
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'pattern': 'Special characters are not allowed'
    },
    'username': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 4 characters long.',
      'maxlength': 'Username cannot be more than 24 characters long.',
      'pattern': 'Special characters are not allowed',
      'uniqueName': 'Username already exists'
    }
  };
}
