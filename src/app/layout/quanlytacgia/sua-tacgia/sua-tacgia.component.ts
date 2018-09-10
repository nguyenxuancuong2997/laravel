import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sua-tacgia',
  templateUrl: './sua-tacgia.component.html',
  styleUrls: ['./sua-tacgia.component.scss']
})
export class SuaTacgiaComponent implements OnInit {
  public listDataTacgia:any;
  public myForm: FormGroup;
  public id: number;
  public them :any[]=[];
  constructor( private fb: FormBuilder,private ar: ActivatedRoute,private rt: Router){
    this.myForm = this.fb.group({
      matacgia:['',[Validators.required]],
      tentacgia:['',[Validators.required]],
      noisong:['',[Validators.required]],
      dienthoai:['',[Validators.required]],
      ngaysinh:['',[Validators.required]]
      
    });
   }

    getData(){
         for(let index=0;index<this.listDataTacgia.length;index++){
              const  element = this.listDataTacgia[index];
              
            if(element.id === this.id) {
                return index;
              }
            }
            return -1;
        }


 async ngOnInit() {

        this.ar.queryParams.subscribe(params => {
          this.id = params.id !== undefined? parseInt(params.id): null;
      });
     await this.getDataApi();
     let i = this.getData();
     if(i!=-1){
      let data = this.listDataTacgia[i];
      this.myForm.setValue({
        matacgia: data.matacgia,
        tentacgia:data.tentacgia,
        noisong:data.noisong,
        dienthoai:data.dienthoai,
        ngaysinh:data.ngaysinh
     });
     }

  }
    getDataApi() {
  if(localStorage.getItem("Datatacgia") !== undefined) {
      this.listDataTacgia= JSON.parse(localStorage.getItem("Datatacgia"));
      console.log('mess',this.listDataTacgia);   
      }
  }

  onSubmit(){
       
        let formData=this.myForm.value;
        console.log("form edit :",formData);
        this.ar.queryParams.subscribe(params => {
          this.id = params.id !== undefined? parseInt(params.id): null;
        });
        this.getDataApi();
        let i = this.getData();

        if(i!==-1){
                this.listDataTacgia[i].matacgia=formData.matacgia;
                this.listDataTacgia[i].tentacgia=formData.tentacgia;
                this.listDataTacgia[i].noisong=formData.noisong;
                this.listDataTacgia[i].dienthoai=formData.dienthoai;
                this.listDataTacgia[i].ngaysinh=formData.ngaysinh;
                localStorage.setItem("Datatacgia",JSON.stringify(this.listDataTacgia));
                this.rt.navigate(['/quanlytacgia']);
        }
        
  }


}
