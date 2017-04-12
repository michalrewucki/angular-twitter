import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/model/user";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[] = [];
  searchText = "";
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.update();
  }

  private update() {
    this.users = this.userService.getAll();
  }
}
