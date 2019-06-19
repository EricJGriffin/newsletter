import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Member  } from '../../models/Member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  

  name:string;
  email:string;
 


  constructor(private memberService:MemberService) { }

  

  ngOnInit() {
  }


  onSubmit() {
  	const member:Member = {
  		name: this.name,
  		email: this.email
  	}
    
    this.memberService.addMember(member).subscribe(data => {
      console.log(data);
    }) ;
    


  	
 }
}