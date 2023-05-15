import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';
import { UserPosts } from '../models/posts.model';

export const jsonplaceholderUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    const usersUrl = jsonplaceholderUrl + '/users';
    return this.http.get<User[]>(usersUrl);
    // .pipe( map( users =>
    // { 
    //   const albumsRequests: Observable<number>[] = [];
    //   users.forEach( user => {
    //     const userAlbumUrl = usersUrl + '/' + user.id + '/albums';
    //     this.http.get<any[]>.subscribe
    //     user
    //     });
    //   return users;
    // }));
  }

  getPosts(userId: string): Observable<UserPosts[]> {
    const userPostsUrl = jsonplaceholderUrl + '/posts?userId=' + userId;
    return this.http.get<UserPosts[]>(userPostsUrl);
  }
  //TODO
}
