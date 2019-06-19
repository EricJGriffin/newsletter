import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './components/members/members.component';
import { AddMemberComponent } from './components/add-member/add-member.component';

const routes: Routes = [
	{ path: '', component: MembersComponent },
	{ path: 'new-member', component: AddMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
