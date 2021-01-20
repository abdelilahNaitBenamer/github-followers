import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private followerService:FollowersService) { }
  followers:any[] = [];

  ngOnInit(): void {
    this.followerService.getAll().subscribe(
      data=>this.followers = JSON.parse(data)
    )
  }

}
