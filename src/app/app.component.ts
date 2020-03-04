import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {

ngOnInit() 
{
  this.list=JSON.parse(localStorage.getItem("list"))
}
  public title = 'example';
  task:string="";
  updateTask:string="";
  errMore5:boolean=false;
  errTwice:boolean=false;
  submitAdd:boolean=false;
  submitUpdate:boolean=false;
  index:number;
  flagUpdate:boolean=false;
  list:string[]=[];
 constructor() 
 {
 }
 add(formAdd)
 {
  this.submitAdd=true;
  this.errMore5=false;
  this.errTwice=false;
 
  if(formAdd.valid&&this.list&&this.list.length==5)
  {
    this.errMore5=true;
  }
  else
  {
    if(this.list&&this.list.find(x=>x==this.task))
    {
      this.errTwice=true;
    }
  }
  
  if(!this.errTwice&&!this.errMore5&&formAdd.valid)
  {
    if(this.list)
    {
      this.list.push(this.task);
    }
    else
    {
      this.list=[];
      this.list[0]=this.task;
    }
    localStorage.setItem("list",JSON.stringify(this.list))
  }
 }
 clearAdd()
 {
   this.submitAdd=false;
 }
 clearUpdate()
 {
  this.submitUpdate=false;
 }
 delete(index)
 {
   this.list.splice(index,1);
   localStorage.setItem("list",JSON.stringify(this.list))
 }
 update(index)
 { 
   this.submitAdd=false;
   this.submitUpdate=false;
   this.updateTask=this.list[index];
   this.index=index;
   this.flagUpdate=true;
 }
 saveUpdate(formUpdate)
 {
   this.submitAdd=false;
   this.submitUpdate=true;
   this.errMore5=false;
   this.errTwice=false;
   if(formUpdate.valid)
  {
    if(this.list&&this.list.find(x=>x==this.updateTask)&&this.list[this.index]!=this.updateTask)
    {
      this.errTwice=true;
    }
    else
    {
      this.list[this.index]=this.updateTask;
      localStorage.setItem("list",JSON.stringify(this.list))
      this.flagUpdate=false;
    }
}
 }
 cancel()
 {
   this.flagUpdate=false;
 }
}

