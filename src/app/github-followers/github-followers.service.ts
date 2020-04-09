import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/sagarbehal08/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() { 
    return this.http.get(this._url).pipe(
      map(response => response));
  }
}
