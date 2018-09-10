import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-nhacungcap',
  templateUrl: './list-nhacungcap.component.html',
  styleUrls: ['./list-nhacungcap.component.scss']
})
export class ListNhacungcapComponent implements OnInit {
  public myForm: FormGroup;
  public dataObj;
  public data: any[] = [];

  constructor(private router: ActivatedRoute) { }

  getDataApi() {

    if (localStorage.getItem("dataNhaxuatban") !== null) {
      this.data = JSON.parse(localStorage.getItem("dataNhaxuatban"));
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

  ngOnInit() {
       this.getDataApi();
  }

  remove(id:number){
    var xoa=confirm("bạn có chắc xóa không");


       if(xoa==true){
        const index = this.data.findIndex(item => item.id === id);
  
        this.data.splice(index,1);
        localStorage.setItem("dataNhaxuatban",JSON.stringify(this.data));

       }
       else{
            alert("sách chưa xóa");
       }

      }

}
