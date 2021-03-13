import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ViewPostComponent} from './components/view-post/view-post.component';
import {AuthorComponent} from './components/author/author.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'view_post', component: ViewPostComponent
  },
  {
    path: 'view_author', component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
