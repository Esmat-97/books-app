import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports:[CommonModule,IonicModule],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router ,private httpCliet:HttpClient) {}

  inputvalue:string="";
 books:any=[];
 filterbooks:any=[];
 index:any;


  ngOnInit(): void {
  this.fetchData()
  }
  fetchData(){
    this.httpCliet.get(' http://localhost:2000')
    .subscribe((data:any)=>{
      console.log(data)
      this.books=data.result;
      this.filterbooks=data.result;
    
    })
  }

  goto(id:any){
this.router.navigate(['/details',id])
  }

  filter(e:any){

this.inputvalue=e.target.value
if(this.inputvalue == "" ){
this.filterbooks =this.books
}
else{
  this.filterbooks = this.books.filter((item:any)=>item.name.includes(this.inputvalue) )
}

  }


  del(item:any){
 this.index= this.filterbooks.indexOf(item);
 this.filterbooks.splice(this.index,1);
  }
}
