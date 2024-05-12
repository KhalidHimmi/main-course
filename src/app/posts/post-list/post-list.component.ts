import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from "../post.model";
import { PostService } from "../posts.service";
import { EMPTY, Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit,OnDestroy {

  posts: Post[] = [];
  private postsSub?: Subscription;
 //private postsSub: Subscription  = EMPTY.subscribe();

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    if (this.postsSub) {
      this.postsSub.unsubscribe();      
    }
  }
}
