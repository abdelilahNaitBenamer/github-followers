import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/services/posts.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mode:boolean=true;
  posts:any = [];
  post ={
    id:0,
    title: '',
    body: '',
    userId: ''
  }

  constructor(private _postService: PostsService) {

  }

  ngOnInit(): void {
    this. _postService.getAll()
    .subscribe(
      data => this.posts = JSON.parse(data),
     (error:AppError)=>{
      if (error instanceof NotFoundError) {
        alert('Error post supprimé')
      }else{
        alert('innatendu')
      }
    });
  }

  initPost(){
    this.post ={
      id:0,
      title: '',
      body: '',
      userId: ''
    }
  }

  createPost(){
    this._postService.post(this.post)
    .subscribe(data => {
      this.post.id = JSON.parse(data).id
      this.posts.unshift(this.post)
      this.initPost()
    },
    (error:AppError)=>{
      console.log('hi')
      if (error instanceof BadInput) {
        alert('Bad Request ...')
      }else{
        alert('innatendu')
      }
    })
  }

  updatePost(){
    this._postService.put(this.post)
    .subscribe(()=>{
      this.mode = true
      this.initPost()
    },
     (error:AppError)=>{
      if (error instanceof BadInput) {
        alert('Bad Request ...')
      }else if (error instanceof NotFoundError) {
        alert('Not Found ...')
      }else{
        alert('innatendu')
      }
    })
  }

  editPost(post:any){
      this.post = post
      this.mode=false;
  }

  deletePost(post:any){
    this._postService.delete(post)
    .subscribe(()=>{
      let index = this.posts.indexOf(post)
      this.posts.splice(index,1)
    },
    (error:AppError)=>{
      if (error instanceof NotFoundError) {
        alert('Error post supprimé')
      }else{
        alert('innatendu')
      }
    })
  }
}
