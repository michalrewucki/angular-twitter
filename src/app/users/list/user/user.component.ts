import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input("user") user : User;
  private TWITTER_DEFAULT_ICON = 'assets/images/twitter.png';

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  lock(id : number) {
    this.userService.lock(id);
  }

  delete(id : number) {
    this.userService.delete(id);
  }

}
