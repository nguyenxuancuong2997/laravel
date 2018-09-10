import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-suasach',
  templateUrl: './suasach.component.html',
  styleUrls: ['./suasach.component.scss']
})
export class SuasachComponent implements OnInit {
  public listDataFull: any;
  public myForm: FormGroup;
  public timkiem: FormGroup;
  public id: number;
  public them: any[] = [];
  public data: any[] = [];

  public listDataTacgia: any;
  public dataNhaxuatban: any;
  
  constructor(
    private fb: FormBuilder,
    private tk: FormBuilder,
    private ar: ActivatedRoute,
    private rt: Router
  ) {
    this.myForm = this.fb.group({
      masach: ['', [Validators.required]],
      tensach: ['', [Validators.required]],
      tacgia: ['', [Validators.required]],
      nhacungcap: ['', [Validators.required]],
      giatien: ['', [Validators.required]],
    });

    this.timkiem=this.tk.group({
      tkname:['', [Validators.required]]
    });

  }

  async ngOnInit() {
    this.ar.queryParams.subscribe(params => {
      this.id = params.id !== undefined ? parseInt(params.id) : null;
    });
    await this.getDataApi();
    await this.getDataTacgia();
    await this.getDataNhaxuatban();
    let i = this.getForm();

    if (i !== -1) {
      let data = this.listDataFull[i];
      this.myForm.setValue({
        masach: data.code,
        tensach: data.name,
        tacgia: data.tacgia,
        nhacungcap: data.nhacungcap,
        giatien: data.giatien,
      
      });
    }

  }

  myFunction(){
    let formData = this.timkiem.value;
    debugger;
    for (let index = 0; index < this.listDataTacgia.length; index++) {
      this.listDataTacgia = JSON.parse(localStorage.getItem("Datatacgia")).filter(x=>x.tentacgia.indexOf(formData.tkname) !== -1);

    }

    // debugger;
  
    
    // return '';
     
  }

  getDataApi() {
    if (localStorage.getItem("lstData") !== undefined) {
      this.listDataFull = JSON.parse(localStorage.getItem("lstData"));
      console.log('mess', this.listDataFull);
    }
  }
  //lấy data tác giả 
  getDataTacgia() {
    if (localStorage.getItem("Datatacgia") !== undefined) {
      this.listDataTacgia = JSON.parse(localStorage.getItem("Datatacgia"));
      console.log(this.listDataTacgia);
    }
    else {
      let dataTacgia = [
        { id: 1, code: 'CS111', name: 'c#', tacgia: 'MS1', id_tacgia: 1, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 2, code: 'CS112', name: 'c', tacgia: 'MS2', id_tacgia: 2, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 3, code: 'CS113', name: 'c++', tacgia: 'MS3', id_tacgia: 3, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 4, code: 'CS114', name: '.net', tacgia: 'MS4', id_tacgia: 4, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 5, code: 'CS115', name: 'php', tacgia: 'MS5', id_tacgia: 5, nhacungcap: 'viet nam', giatien: 20000 },
      ];
      localStorage.setItem("Datatacgia", JSON.stringify(dataTacgia));
      let data = this.getDataApi();
      console.log(data);

    }

  }

  getDataNhaxuatban() {

    if (localStorage.getItem("dataNhaxuatban") !== null) {
      this.dataNhaxuatban = JSON.parse(localStorage.getItem("dataNhaxuatban"));
    } else {
      let dataNhaxuatban = [
        { id: 1, manhaxb: 'NXB01', tennhaxb: 'tien phong', diachi: 'ha noi', sodienthoai: '09923123213' },
        { id: 2, manhaxb: 'NXB02', tennhaxb: 'tien phong 2', diachi: 'ha noi', sodienthoai: '09923123213' },
        { id: 3, manhaxb: 'NXB03', tennhaxb: 'tien phong 3', diachi: 'ha noi', sodienthoai: '09923123213' },
        { id: 4, manhaxb: 'NXB04', tennhaxb: 'tien phong 4', diachi: 'ha noi', sodienthoai: '09923123213' },
        { id: 5, manhaxb: 'NXB05', tennhaxb: 'tien phong 5', diachi: 'ha noi', sodienthoai: '09923123213' },

      ];
      localStorage.setItem("dataNhaxuatban", JSON.stringify(dataNhaxuatban));
      this.getDataNhaxuatban();
    }
    console.log('nxb', this.dataNhaxuatban);
  }




  getForm() {
    for (let index = 0; index < this.listDataFull.length; index++) {
      const element = this.listDataFull[index];
      if (element.id === this.id) {
        return index;
      }
    }
    return -1;
  }

  onSubmit() {
    let formData = this.myForm.value;
    console.log('form', formData);

    this.ar.queryParams.subscribe(params => {
      this.id = params.id !== undefined ? parseInt(params.id) : null;
    });
    this.getDataApi();
    let i = this.getForm();

    if (i !== -1) {
      this.listDataFull[i].masach = formData.code;
      this.listDataFull[i].tensach = formData.name;
      this.listDataFull[i].tacgia = formData.tacgia;
      this.listDataFull[i].nhacungcap = formData.nhacungcap;
      this.listDataFull[i].giatien = formData.giatien;
      localStorage.setItem("lstData", JSON.stringify(this.listDataFull));
      this.rt.navigate(['/']);
    }



  }
}







