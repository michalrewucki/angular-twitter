import {Injectable, OnInit}    from '@angular/core';

import { User } from '../model/user';

@Injectable()
export class UserService {
  private users : User[] = [
    {
      id: 1,
      name: "Mark",
      username: "mark92",
      locked: true
    },
    {
      id: 2,
      name: "Michal",
      username: "michal77",
      locked: false
    },
    {
      id: 3,
      name: "Milo",
      username: "miiilo",
      locked: false
    },
    {
      id: 4,
      name: "Piter",
      username: "piters22",
      locked: false
    },
    {
      id: 5,
      name: "Adrian",
      username: "adddiii",
      locked: false
    },
    {
      id: 6,
      name: "Ewelina",
      username: "eve3",
      locked: false
    }
  ];
  private USER_ID = 7;
  constructor() {}

  getSuggested(text : string, limit : number): User[] {
    let suggested : User[] = [];
    let userArray = this.users;
    for(let i = 0; i < userArray.length; i++) {
      if(suggested.length == limit) {
        break;
      }
      let user = userArray[i];
      if(user.username.toLowerCase().startsWith(text.toLowerCase())) {
        suggested.push(user);
      }
    }
    return suggested;
  };

  lock(id: number) {
    for(let user of this.users) {
      if(user.id == id) {
        user.locked = !user.locked;
        break;
      }
    }
  }

  add(user : User) {
    user.id = this.USER_ID++;
    user.locked = false;
    this.users.push(user);
  }

  delete(id : number) {
    for(let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if(user.id == id) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  nameExists(name: string) : boolean {
    if(!name) return;
    let exists = false;
    for(let user of this.users) {
      if(name.toLowerCase() === user.username.toLowerCase()) {
        exists = true;
        break;
      }
    }
    return exists;
  }

  getAll() : User[] {
    return this.users;
  }

}
