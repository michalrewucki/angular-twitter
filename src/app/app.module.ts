import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet/list/tweet-list.component'
import { TweetAddComponent } from './tweet/add/tweet-add.component'

import { UserService } from './shared/services/user.service'
import { TweetService } from './shared/services/tweet.service'

import { TweetPipe } from './tweet/pipes/TweetPipe';
import { SuggestionBoxDirective } from './shared/directives/suggestion-box/suggestion-box.directive';
import { WysiwygComponent } from './tweet/add/wysiwyg/wysiwyg.component';
import { TweetComponent } from './tweet/tweet.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetAddComponent,
    TweetPipe,
    SuggestionBoxDirective,
    WysiwygComponent,
    TweetComponent,
    AboutComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: TweetComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [
    TweetService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
