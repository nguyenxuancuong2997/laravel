import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-nhacungcap',
  templateUrl: './them-nhacungcap.component.html',
  styleUrls: ['./them-nhacungcap.component.scss']
})
export class ThemNhacungcapComponent implements OnInit {
  
  public myForm: FormGroup;
  constructor(private fb: FormBuilder, private rt: Router) {
    this.myForm = this.fb.group({
      manhaxb: ['', [Validators.required]],
      tennhaxb: ['', [Validators.required]],
      diachi: ['', [Validators.required]],
      sodienthoai: ['', [Validators.required]]
    
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    let formData = this.myForm.value;
    console.log('form-nhacungcap', formData);
    let data: any=this.getDataApi();
    data.push({
          id:data.length+1,
          manhaxb:formData.manhaxb,
          tennhaxb:formData.tennhaxb,
          diachi:formData.diachi,
          sodienthoai:formData.sodienthoai
        });
        localStorage.setItem("dataNhaxuatban",JSON.stringify(data));
        this.rt.navigate(['/nhacungcap']);
  }


  getDataApi() {
    if (localStorage.getItem("dataNhaxuatban") !== undefined) {
      return JSON.parse(localStorage.getItem("dataNhaxuatban"));
    } else {
      
      let itemDefault = [
        { id: 1, manhaxb: 'NXB01', tennhaxb: 'tien phong', diachi: 'ha noi', sodienthoai: '09923123213'},
        { id: 2, manhaxb: 'NXB02', tennhaxb: 'tien phong 2', diachi: 'ha noi', sodienthoai: '09923123213'},
        { id: 3, manhaxb: 'NXB03', tennhaxb: 'tien phong 3', diachi: 'ha noi', sodienthoai: '09923123213'},
        { id: 4, manhaxb: 'NXB04', tennhaxb: 'tien phong 4', diachi: 'ha noi', sodienthoai: '09923123213'},
        { id: 5, manhaxb: 'NXB05', tennhaxb: 'tien phong 5', diachi: 'ha noi', sodienthoai: '09923123213'},

      ];
      localStorage.setItem("dataNhaxuatban",JSON.stringify(itemDefault));
      this.getDataApi();
  }
}

}
