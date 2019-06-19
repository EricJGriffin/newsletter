import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Member } from '../models/Member';

const httpOptions = {
  headers: new HttpHeaders({
	  'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  membersUrl:string = 'http://localhost:3000/api/newsletter';

  constructor(private http:HttpClient) { }
  // Get Members
  getMembers():Observable<Member[]> {
  	return this.http.get<Member[]>(this.membersUrl);
  }

  // Add Member
  addMember(member:Member):Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, httpOptions);
  }
}
