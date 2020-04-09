import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
  
     let id= this.route.snapshot.paramMap.get('id');
      let page = this.route.snapshot.queryParamMap.get('page');

    this.service.getFollowers()
      .subscribe((followers: any) => this.followers = followers);
  }
}
