import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

import { Member } from '../../models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
	members:Member[];

  constructor(private memberService:MemberService) { }

  ngOnInit() {
  	this.memberService.getMembers().subscribe(members => {
  		this.members = members;

    // Sort members
    this.members.sort((val)=> {return new Date(val.create_date)}).reverse()
  	});
  }

}
