import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet'
import { TweetService } from '../tweet.service';

@Component({
  selector: 'tweet-list',
  templateUrl: 'tweet-list.component.html',
  styleUrls: ['tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  private TWITTER_DEFAULT_ICON = 'assets/images/twitter.png';

  tweets: Tweet[];

  constructor(
    private tweetService: TweetService
  ) { }

  ngOnInit(): void {
    this.getTweets();
  }

  getTweets(): void {
    this.tweets = this.tweetService
      .getTweets()
  }
}
