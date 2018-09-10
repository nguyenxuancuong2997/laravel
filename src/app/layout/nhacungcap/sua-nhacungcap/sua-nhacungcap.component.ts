import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sua-nhacungcap',
  templateUrl: './sua-nhacungcap.component.html',
  styleUrls: ['./sua-nhacungcap.component.scss']
})
export class SuaNhacungcapComponent implements OnInit {
  public listDataFull:any;
  public myForm: FormGroup;
  public id: number;
  public them :any[]=[];
  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private rt: Router
  ) { 
    this.myForm = this.fb.group({
      manhaxb: ['', [Validators.required]],
      tennhaxb: ['', [Validators.required]],
      diachi: ['', [Validators.required]],
      sodienthoai: ['', [Validators.required]]
    });
  }

 async ngOnInit() {
  
    this.ar.queryParams.subscribe(params => {
         this.id = params.id !== undefined? parseInt(params.id): null;
     });
    await this.getDataApi();
    let i = this.getForm();
    if (i !== -1) {
      let data = this.listDataFull[i];
      this.myForm.setValue({
        manhaxb: data.manhaxb,
        tennhaxb:data.tennhaxb,
        diachi:data.diachi,
        sodienthoai:data.sodienthoai
         });
}
  
}

  getDataApi() {
  
    if (localStorage.getItem("dataNhaxuatban") !== undefined) {
      this.listDataFull= JSON.parse(localStorage.getItem("dataNhaxuatban"));
      console.log('dataNhaxuatban ',this.listDataFull);   
  }
}

  getForm(){
    for (let index = 0; index < this.listDataFull.length; index++) {
      const element = this.listDataFull[index];
      if (element.id === this.id){
        return index;
      }
    }
    return -1;
  }
 onSubmit(){
    let formData = this.myForm.value;
    console.log('form', formData);

    this.ar.queryParams.subscribe(params => {
      this.id = params.id !== undefined? parseInt(params.id): null;
    });
    this.getDataApi();
    let i = this.getForm();

      if (i !== -1) {
        this.listDataFull[i].manhaxb = formData.manhaxb;
        this.listDataFull[i].tennhaxb=formData.tennhaxb;
        this.listDataFull[i].diachi=formData.diachi;
        this.listDataFull[i].sodienthoai=formData.sodienthoai;
        localStorage.setItem("dataNhaxuatban",JSON.stringify(this.listDataFull));
        this.rt.navigate(['/nhacungcap']);
      }

 
  }
}



 

 









