import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tacgia',
  templateUrl: './list-tacgia.component.html',
  styleUrls: ['./list-tacgia.component.scss']
})
export class ListTacgiaComponent implements OnInit {
  public myForm: FormGroup;
  public dataObj;
  public data: any[] = [];
  constructor(private router: ActivatedRoute) { }

  getDataApi(){
     if(localStorage.getItem("Datatacgia") !== null){
        this.data = JSON.parse(localStorage.getItem("Datatacgia"));
     }
     else{
      let itemDefault = [
        { id: 1, matacgia: 'TG111', tentacgia: 'nguyễn văn a', noisong: 'viet nam', dienthoai: '092132132', ngaysinh: '27-1-2012' },
        { id: 2, matacgia: 'TG112', tentacgia: 'nguyễn b', noisong: 'viet nam', dienthoai: '213123123', ngaysinh: '20-3-2000' },
        { id: 3, matacgia: 'TG113', tentacgia: 'nguyễn thi', noisong: 'viet nam', dienthoai: '0921312312', ngaysinh: '30-3-1997' },
        { id: 4, matacgia: 'TG114', tentacgia: "định nguyễn", noisong: 'viet nam', dienthoai: '09213123123', ngaysinh:'13-4-1999' },
        { id: 5, matacgia: 'TG115', tentacgia: 'thái nguyễn ', noisong: 'viet nam', dienthoai: '097462138', ngaysinh: '19-4-2000' },

      ];
       localStorage.setItem("Datatacgia",JSON.stringify(itemDefault));
       this.getDataApi();
     }
  }

  ngOnInit() {
     this.getDataApi();
  }

  remove(id:number){
       this.getDataApi();
       var con=confirm("bạn có chắc xóa không");
        
    if(con){
        const index = this.data.findIndex(item => item.id === id);
        this.data.splice(index,1);
        localStorage.setItem("Datatacgia",JSON.stringify(this.data));
          }
       else{
          alert("xóa không thành công");
       }
  }

}
