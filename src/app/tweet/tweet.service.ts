import { Injectable }    from '@angular/core';

import { Tweet } from './tweet';

@Injectable()
export class TweetService {

  getTweets(): Tweet[] {
    let tweet: Tweet[] = [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "MyName",
        date: new Date()
      },
      {
        id: 2,
        text: "@tom.and.jerry Sed ut perspiciatis unde omnis iste natus error sit? http://tom-and-jerry-in-awkward-situation.com",
        name: "MyName",
        date: new Date()
      },
    ];
    return tweet;
  }

}
