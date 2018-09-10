import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  public myForm: FormGroup;
  public myForm1: FormGroup;
  public dataObj;
  public data: any[] = [];
  public listDataTacgia: any;
  public dataNhaxuatban: any;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private rt: Router,
    private tk: FormBuilder
  ) {
    this.myForm = this.fb.group({
      masach: ['', [Validators.required]],
      tentacgia: ['0', [Validators.required]],
      nhacungcap:['0',Validators.required]
    });


  }

  getDataApi() {

    if (localStorage.getItem("lstData") !== null) {
      this.data = JSON.parse(localStorage.getItem("lstData"));


    } else {
      let itemDefault = [
        { id: 1, code: 'CS111', name: 'c#', tacgia: 'MS1', id_tacgia: 1, id_nhaxuatban: 1, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 2, code: 'CS112', name: 'c', tacgia: 'MS2', id_tacgia: 2, id_nhaxuatban: 2, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 3, code: 'CS113', name: 'c++', tacgia: 'MS3', id_tacgia: 3, id_nhaxuatban: 3, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 4, code: 'CS114', name: '.net', tacgia: 'MS4', id_tacgia: 4, id_nhaxuatban: 4, nhacungcap: 'viet nam', giatien: 20000 },
        { id: 5, code: 'CS115', name: 'php', tacgia: 'MS5', id_tacgia: 5, id_nhaxuatban: 5, nhacungcap: 'viet nam', giatien: 20000 },
      ];
      localStorage.setItem("lstData", JSON.stringify(itemDefault));
      this.getDataApi();
    }
  }
  async ngOnInit() {
    await this.getDataTacgia();
    await this.getDataNhaxuatban();
    await this.getDataApi();
  }


  removeWord(id: number) {
    this.getDataApi();
    var xoa = confirm("bạn có chắc xóa không");


    if (xoa == true) {
      const index = this.data.findIndex(item => item.id === id);

      this.data.splice(index, 1);
      localStorage.setItem("lstData", JSON.stringify(this.data));

    }
    else {
      alert("sách chưa xóa");
    }


  }

  getDataTacgia() {

    if (localStorage.getItem("Datatacgia") !== undefined) {
      this.listDataTacgia = JSON.parse(localStorage.getItem("Datatacgia"));
      this.listDataTacgia.splice(0, 0, { id: 0, tentacgia: 'chọn tất cả' });
      console.log('listDataTacgia', this.listDataTacgia);
    }
  }

  getDataNhaxuatban() {

    if (localStorage.getItem("dataNhaxuatban") !== undefined) {
      this.dataNhaxuatban = JSON.parse(localStorage.getItem("dataNhaxuatban"));
      this.dataNhaxuatban.splice(0, 0, { id: 0, tennhaxb: 'chọn tất cả' });
      console.log('listDataTacgia',this.dataNhaxuatban);
    } 
  }

  getName(id: any) {

    for (let index = 0; index < this.listDataTacgia.length; index++) {

      if (parseInt(id) === this.listDataTacgia[index].id) {
        return this.listDataTacgia[index].tentacgia;
      }
    }

    return '';
  }

  getNhacungcap(id: any) {
    let formData = this.myForm.value;

    for (let index = 0; index < this.dataNhaxuatban.length; index++) {
      if (parseInt(id) === this.dataNhaxuatban[index].id) {
        return this.dataNhaxuatban[index].tennhaxb;

      }
    }
    return '';
  }


  Sreach() {
      
    let formData = this.myForm.value;
    this.data = JSON.parse(localStorage.getItem("lstData")).filter(x =>
      x.code.indexOf(formData.masach) !== -1 &&
      (x.tacgia === formData.tentacgia 
       || formData.tentacgia === '0') &&
       (x.nhacungcap===formData.nhacungcap ||formData.nhacungcap==='0') );
  }
}
