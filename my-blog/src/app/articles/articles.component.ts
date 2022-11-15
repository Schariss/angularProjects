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

  // Scully provides 'ScullyRoutesService', an Angular service that we can use in our components to get
  // information about the routes that it will create according to the blog posts
  constructor(private scullyService: ScullyRoutesService) { }

  // Angular services that provide initialization logic to a component should be
  // called inside the ngOnInit method and not in the constructor because it is
  // easier to provide mocks about those services when unit testing the component
  ngOnInit(): void {
    // The returned posts variable will contain all the available routes that were generated from Scully
    // Scully is run against all routes of our Angular application

    //this.routeSub = 
      this.scullyService.available$.subscribe(posts => {
        // To avoid displaying routes other than those related to blog posts, 
        // such as the contact route, we filter out the results from the available$ property
        this.posts = posts.filter(post => post.title);
      });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    }

}
