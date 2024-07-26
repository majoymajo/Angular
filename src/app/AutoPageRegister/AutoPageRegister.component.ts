import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-AutoPageRegister',
  templateUrl: './AutoPageRegister.component.html',
  styleUrls: ['./AutoPageRegister.component.css']
})
export class AutoPageRegisterComponent implements OnInit {
  formular: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.formular = this.formbuilder.group({
      "code": ['', [Validators.required, codevalidator()]],
      "brand": ['', [Validators.required]],
      "model": ['', [Validators.required]],
      "year": ['', [Validators.required]],
      "color": ['', [Validators.required]],
      "km": ['', [Validators.required]],
      "price": ['', [Validators.required]],
      "rating": ['', [Validators.required]]
    });
  }

  ngOnInit() {
    
  }

  save() {
    if (this.formular.valid) {
      alert('Saved Successfully');
    } else {
      alert('Please fulfill all fields');
    }
  }
}

export function codevalidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codeV = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codeV.test(value)) {
      return null; 
    } else {
      return { 'codevalidate': true }; 
    }
  };
}