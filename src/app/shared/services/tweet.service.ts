import { Injectable }    from '@angular/core';

import { Tweet } from '../model/tweet';

@Injectable()
export class TweetService {
  private tweets: Tweet[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "MyName",
      date: new Date()
    },
    {
      id: 2,
      text: "<a href='tom.and.jerry'>@tom.and.jerry</a> Sed ut perspiciatis unde omnis iste natus error sit? <a href='http://tom-and-jerry-in-awkward-situation.com'>http://tom-and-jerry-in-awkward-situation.com</a>",
      name: "MyName",
      date: new Date()
    },
  ];

  getAll(): Tweet[] {
    return this.tweets;
  }

  add(tweet : Tweet) {
    this.tweets.push(tweet);
  }
}
