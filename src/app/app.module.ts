import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet/list/tweet-list.component'

import { TweetService } from './tweet/tweet.service'

import { TweetPipe } from './tweet/pipes/TweetPipe'

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
