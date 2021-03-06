import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {TrendingComponent} from './trending/trending.component';
import {LikedComponent} from './liked/liked.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {PostedComponent} from './posted/posted.component';
import {CategoryComponent} from './category/category.component';
import { EditProfileComponent} from './edit-profile/edit-profile.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import { BarchartComponent } from './barchart/barchart.component';
import {GraphCategoryComponent} from './graph-category/graph-category.component';
const routes: Routes = [
  {path: '', redirectTo: '/trending', pathMatch : 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'liked', component: LikedComponent},
  {path: 'recommended', component: RecommendationComponent},
  {path: 'posted', component: PostedComponent},
  {path: 'category/:categoryName', component: CategoryComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'viewProfile', component: ViewProfileComponent},
  {path:'bar-chart',component:BarchartComponent},
  {path:'graph-category',component: GraphCategoryComponent},
  {path:'graph-category/:id',component:GraphCategoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [RegisterComponent];
