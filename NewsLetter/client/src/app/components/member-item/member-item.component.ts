import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../../services/member.service';

import { Member } from '../../models/Member';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService:MemberService) { }

  ngOnInit() {
  }

}
