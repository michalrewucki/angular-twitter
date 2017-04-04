import { Injectable }    from '@angular/core';

import { User } from '../model/user';

@Injectable()
export class UserService {
  private users : User[] = [
    {
      id: 1,
      name: "Mark",
      username: "mark92"
    },
    {
      id: 2,
      name: "Michal",
      username: "michal77"
    },
    {
      id: 3,
      name: "Milo",
      username: "miiilo"
    },
    {
      id: 4,
      name: "Piter",
      username: "piters22"
    },
    {
      id: 5,
      name: "Adrian",
      username: "adddiii"
    },
    {
      id: 6,
      name: "Ewelina",
      username: "eve3"
    }
  ];

  getSuggestedUsers(text : string, limit : number): User[] {
    let suggested : User[] = [];
    for(let i = 0; i < this.users.length; i++) {
      if(suggested.length == limit) {
        break;
      }
      let user = this.users[i];
      if(user.username.toLowerCase().startsWith(text.toLowerCase())) {
        suggested.push(user);
      }
    }
    return suggested;
  }

}
