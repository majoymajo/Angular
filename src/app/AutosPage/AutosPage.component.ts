import { Component, OnInit } from '@angular/core';
import { Auto } from '../Utilities/Modules/Vehicles';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../Services/autos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-AutosPage',
  templateUrl: './AutosPage.component.html',
  styleUrls: ['./AutosPage.component.css']
})
export class AutosPageComponent implements OnInit {
  auto: Auto;
  formular: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private autosservice: AutosService,
    private formBuilder: FormBuilder
  ) {
    this.formular = this.formBuilder.group({
      code: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      color: ['', Validators.required],
      price: [0, Validators.required],
      km: [0, Validators.required],
      rating: [0, Validators.required],
    });

    this.auto = {
      code: '',
      brand: '',
      model: '',
      year: '',
      color: '',
      price: 0,
      km: 0,
      rating: 0,
    };
  }

  ngOnInit() {
   

   

    this.route.params.subscribe(params => {
      this.auto = this.autosservice.getAuto(params['code']);
    });
  }

  save() {
    Swal.fire({
    title:"Message",
    text: "Saved Succesfully",
    icon:"info"
    })
}}
