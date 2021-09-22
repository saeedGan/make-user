import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {PostDataService} from '../../services/post-data.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

user:User=new User();
error:String='';
name:String='';
last:String='';
avatar:String='';
email:String='';
id?:number;
  constructor(private post:PostDataService) { }

  ngOnInit(): void {

  }

  changeName(event:any){
    this.error='';
  this.name=event.target.value;

  }
  changeLast(event:any){
    this.error='';
    this.last=event.target.value;
  }


changeEmail(event:any){
  this.error='';
  this.email=event.target.value;
}

changeAvatar(event:any){
  this.error='';
  this.avatar=event.target.value;
}



    onClick(){
      if(this.last ==''|| this.name=='' || this.email==''){

          this.error='Please fill the fields'
      }
      else{
        this.error=''

      this.user.id=this.id;
    this.user.last_name=this.last;
    this.user.first_name=this.name;
    this.user.email=this.email;
    this.user.avatar=this.avatar;
   
      this.post.postData(this.user).subscribe();
      location.reload();
  }
    }

}
