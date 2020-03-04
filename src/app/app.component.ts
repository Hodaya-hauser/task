import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() 
  {
  }
  public title = 'example';
  list:string[]=[];
  task:string="";
  updatetask:string="";
  errmore5:boolean=false;
  errtwice:boolean=false;
  submitadd:boolean=false;
  submitupdate:boolean=false;
  index:number;
  flagupdate:boolean=false;
  constructor() {
  }
add(form)
{
  this.submitadd=true;
  this.errmore5=false;
  this.errtwice=false;
  if(this.list.length==5)
  {
    this.errmore5=true;
  }
  if(this.list.find(x=>x==this.task))
  {
    this.errtwice=true;
  }
  if(!this.errtwice&&!this.errmore5&&form.valid)
  {
    this.list.push(this.task)
  }
 }
 clear(){
  this.errmore5=false;
  this.errtwice=false;
 }
 delete(index)
 {
   this.list.splice(index,1);
 }
 update(index)
 {
   this.submitupdate=false;
   this.updatetask=this.list[index];
   this.index=index;
   this.flagupdate=true;
 }
 saveupdate(formupdate){
  this.submitupdate=true;
  this.errmore5=false;
  this.errtwice=false;
  if(this.list.find(x=>x==this.updatetask)&&this.list[this.index]!=this.updatetask)
  {
    this.errtwice=true;
  }
  if(!this.errtwice&&formupdate.valid)
  {
    this.list[this.index]=this.updatetask;
    this.flagupdate=false;
  }
 }
 cancel(){
   this.flagupdate=false;
 }
}

