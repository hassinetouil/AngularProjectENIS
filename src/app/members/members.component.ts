import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Membre';
import { MemberService } from 'src/services/member.service';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type','icon'];
dataSource: Member[];
  constructor(private MemberService: MemberService) {
    this.dataSource = this.MemberService.members;
   }

  ngOnInit(): void {
  }

}
