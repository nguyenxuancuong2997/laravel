import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-tacgia',
  templateUrl: './them-tacgia.component.html',
  styleUrls: ['./them-tacgia.component.scss']
})
export class ThemTacgiaComponent implements OnInit {
  public myForm: FormGroup;
  constructor( private fb: FormBuilder, private rt: Router) {
    this.myForm = this.fb.group({
      matacgia:['',[Validators.required]],
      tentacgia:['',[Validators.required]],
      noisong:['',[Validators.required]],
      dienthoai:['',[Validators.required]],
      ngaysinh:['',[Validators.required]]
      
    });
   }

  ngOnInit() {
  }
 
  onSubmit(){
       let form=this.myForm.value;
       console.log('form them',form);
       let data :any[]=this.getDataApi();
       data.push({
           id:data.length+1,
           matacgia:form.matacgia,
           tentacgia:form.tentacgia,
           noisong:form.noisong,
           dienthoai:form.dienthoai,
           ngaysinh:form.ngaysinh
          });

          localStorage.setItem("Datatacgia",JSON.stringify(data));
          this.rt.navigate(['/quanlytacgia']);
  }

  getDataApi() {
    if (localStorage.getItem("Datatacgia") !== undefined) {
      return JSON.parse(localStorage.getItem("Datatacgia"));
    } else {
      
      let itemDefault = [
        { id: 1, matacgia: 'TG111', tentacgia: 'nguyễn văn a', noisong: 'viet nam', dienthoai: '092132132', ngaysinh: '27-1-2012' },
        { id: 2, matacgia: 'TG112', tentacgia: 'nguyễn b', noisong: 'viet nam', dienthoai: '213123123', ngaysinh: '20-3-2000' },
        { id: 3, matacgia: 'TG113', tentacgia: 'nguyễn thi', noisong: 'viet nam', dienthoai: '0921312312', ngaysinh: '30-3-1997' },
        { id: 4, matacgia: 'TG114', tentacgia: "định nguyễn", noisong: 'viet nam', dienthoai: '09213123123', ngaysinh:'13-4-1999' },
        { id: 5, matacgia: 'TG115', tentacgia: 'thái nguyễn ', noisong: 'viet nam', dienthoai: '097462138', ngaysinh: '19-4-2000' },
       ];
      localStorage.setItem("Datatacgia",JSON.stringify(itemDefault));
      return this.getDataApi();
    }
  }

}
