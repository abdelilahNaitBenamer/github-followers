import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';

const routes: Routes=[
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "followers",
    component: FollowersComponent
  },
  {
    path: "followers/:id/:username", // pour créer un segment dynamique avec les deux points
    component: ProfilFollowerComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
