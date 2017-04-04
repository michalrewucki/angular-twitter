import {Component, ViewChild, Inject} from '@angular/core';

import { TweetService } from '../../shared/services/tweet.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {WysiwygComponent} from "./wysiwyg/wysiwyg.component";
import {Tweet} from "../../shared/model/tweet";

@Component({
  selector: 'tweet-add',
  templateUrl: 'tweet-add.component.html',
  styleUrls: ['tweet-add.component.css']
})

export class TweetAddComponent {

  @ViewChild(WysiwygComponent) wysiwyg;
  linkTitle = "";
  linkHref = "";

  insertLink() {
    let title = this.linkTitle;

    if(title.length == 0) {
      title = this.linkHref;
    }

    this.wysiwyg.insertLink(title, this.linkHref);

    this.linkTitle = "";
    this.linkHref = "";
  }

  constructor(
    private tweetService: TweetService,
    private modalService: NgbModal
  ) {}

  createTweet() {
    this.tweetService.add(new Tweet("MyUser", this.wysiwyg.buildText()));
    this.wysiwyg.clearEditor();
  }

  openModal(content) {
    this.modalService.open(content, {});
  }

}
