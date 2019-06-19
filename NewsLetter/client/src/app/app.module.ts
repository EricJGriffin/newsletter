import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import { MemberItemComponent } from './components/member-item/member-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddMemberComponent } from './components/add-member/add-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberItemComponent,
    HeaderComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
