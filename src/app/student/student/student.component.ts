import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/admin/data.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private ds:DataService) { }

  data:any;
  stu=this.ds.loggedinUser
 fee=this.ds.loggedinUser
 data1:any;
  
  ngOnInit()
   {
    // this.ds.feeGetData().subscribe((read)=>{
    //   this.fee=read["message"]
    //   console.log(this.fee);
    // })
  
    // this.ds.placementGetData().subscribe((read)=>{
    //   this.data=read["message"]
    //   console.log(this.data);
      
    // })

    // console.log("fee",this.fee)
      this.ds.readfee(this.fee).subscribe((read)=>{
        this.data=read["message"][0];
        console.log("fee details", this.data);
      })
      console.log("palcement",this.stu)
      this.ds.readPlacement(this.stu).subscribe((read)=>{
        this.data1=read["message"][0];
        console.log("place",this.data1)
      })
    
  }

  
  
}