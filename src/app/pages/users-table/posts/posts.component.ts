import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPosts } from 'src/app/models/posts.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: UserPosts[];
  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.posts = [];
    const navigationParams = this.route.snapshot.queryParams;
    const postId = navigationParams['userId'];
    this.userService.getPosts(postId).subscribe( userPosts => {
      this.posts = userPosts;
    });
  }

}
