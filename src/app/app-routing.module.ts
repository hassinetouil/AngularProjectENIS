import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleAffectComponent } from './article-affect/article-affect.component';
import { ArticlesComponent } from './article/article.component';
import { MemberformComponent } from './memberform/memberform.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: "members", pathMatch: "full", component: MembersComponent },
  { path: "create", pathMatch: "full", component: MemberformComponent },
  { path: "articles", pathMatch: "full", component: ArticlesComponent },
  {path:"articles/:idArticle",pathMatch:"full",component:ArticleAffectComponent},
  { path: "tools", pathMatch: "full", component: MemberformComponent },
  { path: "Events", pathMatch: "full", component: MemberformComponent },
  { path: 'members/:id/edit', pathMatch: 'full', component: MemberformComponent },
  { path: "dashboard", pathMatch: "full", component: AppComponent },
  { path: "**", pathMatch: "full", redirectTo: "members" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
