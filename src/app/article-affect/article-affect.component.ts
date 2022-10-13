import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Membre';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.scss']
})
export class ArticleAffectComponent implements OnInit {
  selected = "None";
  members: Member[];
  constructor(private MemberService: MemberService) {
    this.members = this.MemberService.members;
  }
  ngOnInit(): void {
  }
}
