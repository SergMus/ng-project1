import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

interface IObjectKeys {
  [key: string]: string;
}

export interface Post extends IObjectKeys {
  title: string;
  text: string;
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
})
export class AppComponent {
  // title = '';
  search = '';
  selectType = 'title';

  posts: Post[] = [
    {
      title: 'Angular components',
      text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
      id: '1',
    },
    {
      title: 'DEVELOP ACROSS ALL PLATFORMS',
      text: 'Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.',
      id: '2',
    },
    {
      title: 'Angular pipes',
      text: 'with Angular and reuse your code and abilities ',
      id: '3',
    },
    {
      title: 'react',
      text: ' Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.',
      id: '4',
    },
  ];

  constructor(
    public LocalCounterService: LocalCounterService,
    public AppCounterService: AppCounterService
  ) {}

  updatePost(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: string) {
    this.posts = this.posts.filter((item) => item.id !== id);
  }

  filterPosts(searchStr: string) {
    this.search = searchStr;
  }

  changeType(type: string) {
    this.selectType = type;
  }

  p: Promise<string> = new Promise((res) => {
    setTimeout(() => {
      res('Angular');
    }, 4000);
  });

  date: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
