import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-follower',
  templateUrl: './profil-follower.component.html',
  styleUrls: ['./profil-follower.component.css']
})
export class ProfilFollowerComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  id: number = 0;
  username: string = '';
  type: string = '';
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params=>{
    //     this.username = params.get('username');
    //     this.id = +params.get('id');
    // })

    // this.route.queryParamMap.subscribe(queryParams=>{
    //     console.log('query param '+queryParams.get('type'))
    // })

    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.username = this.route.snapshot.paramMap.get('username')
    // this.type = this.route.snapshot.queryParamMap.get('type')
  }

}
