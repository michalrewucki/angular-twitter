import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet/list/tweet-list.component'
import { TweetAddComponent } from './tweet/add/tweet-add.component'

import { UserService } from './shared/services/user.service'
import { TweetService } from './shared/services/tweet.service'

import { TweetPipe } from './tweet/pipes/TweetPipe';
import { SuggestionBoxDirective } from './shared/directives/suggestion-box/suggestion-box.directive';
import { WysiwygComponent } from './tweet/add/wysiwyg/wysiwyg.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetAddComponent,
    TweetPipe,
    SuggestionBoxDirective,
    WysiwygComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    TweetService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
