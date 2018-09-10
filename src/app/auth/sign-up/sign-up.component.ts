import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
        email:['',[Validators.email,Validators.required]],
        pass:['',[Validators.required]]
    });
  }

  ngOnInit() {

  }

}
