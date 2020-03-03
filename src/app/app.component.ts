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
  errmore5:boolean=false;
  errtwice:boolean=false;
  submit:boolean=false;
  constructor() {
  }
add(form)
{
  this.submit=true;
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
}

