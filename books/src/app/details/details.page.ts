import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  imports:[CommonModule,IonicModule],
standalone:true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

 

  constructor(private activatedRoute:ActivatedRoute){}
 books:any=[];
 iti:any=[];
 httpCliet=inject(HttpClient)

 ngOnInit(): void {
 this.fetchData()
 }
 fetchData(){
   this.httpCliet.get(' http://localhost:2000')
   .subscribe((data:any)=>{
     console.log(data)
     this.books=data.result;
     
     const id= this.activatedRoute.snapshot.params['id']
     this.iti=this.books.find((iti:any)=>iti.id == `${id}`)
  
   console.log( this.iti)

   })
 }
}
