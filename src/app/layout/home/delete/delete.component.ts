import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  public listDataFull:any;
  public id: number;
  
  constructor( private ar: ActivatedRoute, private rt: Router) { }

  ngOnInit() {
      this.ar.queryParams.subscribe(params => {
        this.id = params.id !== undefined? parseInt(params.id): null;
    });
     this.getDataApi();
     let i = this.getForm();
     var xoa=confirm("bạn có chắc xóa không");
     if(xoa==true){
    
         if(i!=-1){
          let data = this.listDataFull[i];
          const index = this.listDataFull.findIndex(data.id);

          this.listDataFull.splice(index,1);
          localStorage.setItem("lstData",JSON.stringify(this.listDataFull));
          this.rt.navigate(['/']);
              
               
         }

     }
     else{
          alert("sách chưa xóa");
     }

  }
  getDataApi() {
  
    if (localStorage.getItem("lstData") !== undefined) {
      this.listDataFull= JSON.parse(localStorage.getItem("lstData"));
      console.log('mess',this.listDataFull);   
  }
}

  getForm(){
    for (let index = 0; index < this.listDataFull.length; index++) {
      const element = this.listDataFull[index];
      if (element.id === this.id) {
        return index;
      }
    }
    return -1;
  }

 
}
