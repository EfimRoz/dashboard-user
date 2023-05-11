import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postId: any = 0;
  constructor(private route: ActivatedRoute) {
    const navigationParams: any = this.route.params;
    this.postId = navigationParams['id'];
  }

}
