import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/userservice.service';
import { Users } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  public users : Users[]=[];

  ngOnInit(): void {
    this.userService.users().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}