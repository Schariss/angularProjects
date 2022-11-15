import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(private scullyService: ScullyRoutesService) { }

  // Angular services that provide initialization logic to a component should be
  // called inside the ngOnInit method and not in the constructor because it is
  // easier to provide mocks about those services when unit testing the component
  ngOnInit(): void {
    // this.routeSub = 
      this.scullyService.available$.subscribe(posts => {
        this.posts = posts.filter(post => post.title);
      });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    }

}
