
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-themsach',
  templateUrl: './themsach.component.html',
  styleUrls: ['./themsach.component.scss']
})
export class ThemsachComponent implements OnInit {

  public myForm: FormGroup;
  public listDataTacgia:any;
  public dataNhaxuatban:any;
  public element:any;
  constructor(
    private fb: FormBuilder, private rt: Router
  ) {
    this.myForm = this.fb.group({
      masach: ['', [Validators.required]],
      tensach: ['', [Validators.required]],
      tacgia: ['', [Validators.required]],
      nhacungcap: ['', [Validators.required]],
    
       giatien: ['', [Validators.required]]
    });
  }

 async  ngOnInit() {
    await this.getDataTacgia();
    await this.getDataNhaxuatban();
   
  }

  getDataTacgia(){
    if (localStorage.getItem("Datatacgia") !== undefined) {
      this.listDataTacgia=JSON.parse(localStorage.getItem("Datatacgia"));
      console.log('listDataTacgia', this.listDataTacgia);
    }
    else{
      let dataTacgia = [
        { id: 1, code: 'CS111', name: 'c#', tacgia: 'MS1',id_tacgia: 1, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 2, code: 'CS112', name: 'c', tacgia: 'MS2',id_tacgia: 2, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 3, code: 'CS113', name: 'c++', tacgia: 'MS3',id_tacgia: 3, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 4, code: 'CS114', name: '.net', tacgia: 'MS4',id_tacgia: 4, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 5, code: 'CS115', name: 'php', tacgia: 'MS5',id_tacgia: 5, nhacungcap: 'viet nam', giatien: 20000 },
      ];
      localStorage.setItem("Datatacgia",JSON.stringify(dataTacgia));
      let data=this.getDataApi();
      console.log(data);
     
    }
       
  }
    getDataNhaxuatban() {

      if (localStorage.getItem("dataNhaxuatban") !== null) {
        this.dataNhaxuatban = JSON.parse(localStorage.getItem("dataNhaxuatban"));
      } else {
        let dataNhaxuatban = [
          { id: 1, manhaxb: 'NXB01', tennhaxb: 'tien phong' ,diachi: 'ha noi', sodienthoai: '09923123213'},
          { id: 2, manhaxb: 'NXB02', tennhaxb: 'tien phong 2', diachi: 'ha noi', sodienthoai: '09923123213'},
          { id: 3, manhaxb: 'NXB03', tennhaxb: 'tien phong 3', diachi: 'ha noi', sodienthoai: '09923123213'},
          { id: 4, manhaxb: 'NXB04', tennhaxb: 'tien phong 4', diachi: 'ha noi', sodienthoai: '09923123213'},
          { id: 5, manhaxb: 'NXB05', tennhaxb: 'tien phong 5', diachi: 'ha noi', sodienthoai: '09923123213'},
  
        ];
        localStorage.setItem("dataNhaxuatban",JSON.stringify(dataNhaxuatban));
        this.getDataNhaxuatban();
      }
        console.log('nxb',this.dataNhaxuatban);
    }

  onSubmit() {
    let formData = this.myForm.value;
    console.log('form-themsach', formData);

    let data: any[] = this.getDataApi();
    data.push(
      {

        id: data.length + 1,
        code: formData.masach,
        name: formData.tensach,
        tacgia:formData.tacgia,
        nhacungcap:formData.nhacungcap,
        giatien: formData.giatien
      }
    );
    localStorage.setItem("lstData",JSON.stringify(data));
    this.rt.navigate(['/']);
  }


  getDataApi() {
    if (localStorage.getItem("lstData") !== undefined) {
      return JSON.parse(localStorage.getItem("lstData"));
    } else {
      
      let itemDefault = [
        { id: 1, code: 'CS111', name: 'c#', tacgia: 'MS1', id_tacgia: 1,  nhacungcap: 'viet nam', giatien: 20000 },
        { id: 2, code: 'CS112', name: 'c', tacgia: 'MS2',  id_tacgia: 2,  nhacungcap: 'viet nam', giatien: 20000 },
        { id: 3, code: 'CS113', name: 'c++', tacgia: 'MS3', id_tacgia: 3,  nhacungcap: 'viet nam', giatien: 20000 },
        { id: 4, code: 'CS114', name: '.net', tacgia: 'MS4', id_tacgia: 4,  nhacungcap: 'viet nam', giatien: 20000 },
        { id: 5, code: 'CS115', name: 'php', tacgia: 'MS5',  id_tacgia: 5, nhacungcap: 'viet nam', giatien: 20000 },
      ];
      localStorage.setItem("lstData",JSON.stringify(itemDefault));
      return this.getDataApi();
    }
  }


   

     



  


}

