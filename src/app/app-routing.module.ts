import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberformComponent } from './memberform/memberform.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: "members", pathMatch: "full", component: MembersComponent },
  { path: "create", pathMatch: "full", component: MemberformComponent },
  {path:'members/:id/edit',pathMatch:'full',component:MemberformComponent},
  { path: "", pathMatch: "full", component: AppComponent },
  { path: "**", pathMatch: "full", redirectTo: "members" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
