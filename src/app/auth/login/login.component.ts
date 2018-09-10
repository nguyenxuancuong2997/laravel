import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private rt: Router
  ) { 
    this.myForm = this.fb.group({
        email:['',[Validators.email,Validators.required]],
        pass:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }
  onSubmit(){
      let formData = this.myForm.value;
      console.log('form',formData);
       if(this.myForm.invalid){
          return ;
       }
       if (formData.email === 'admin@gmail.com' && formData.pass === '123456') {
         this.myForm.setErrors(null);
         localStorage.setItem('Authorization',formData.email);
         this.rt.navigate(['/']);
       }else{
        this.myForm.setErrors({exist: true});
       }
  }

 
}
