import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/User';
import { FetchService } from 'src/app/services/fetch.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {DeleteService} from 'src/app/services/delete.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
faTrash=faTrash;
  users:User[]=[];


  constructor(private fetch:FetchService,private del:DeleteService){

  }

  ngOnInit(): void {
    this.fetch.getData().subscribe((users)=>(this.users=users));
  }


onClick(user:User){
  this.del.deleteUser(user).subscribe(()=>(this.users=this.users.filter(t=>t.id!==user.id)));
}


}
