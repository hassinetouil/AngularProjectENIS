import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Membre';
import { MemberService } from 'src/services/member.service';
import { GLOBAL } from '../app-config';
import {MatTableDataSource} from '@angular/material/table';
import { ConfirmeDialogComponent } from '../confirme-dialog/confirme-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type','icon'];
dataSource: MatTableDataSource<Member>;
  constructor(private MemberService: MemberService,private dialog:MatDialog) {
    this.dataSource = new  MatTableDataSource<Member>(this.MemberService.members);
   }
  fetchDataSource(): void{
    this.MemberService.getAllMembers().then((tab) => { return this.dataSource.data = tab});
  }
  ngOnInit(): void {
  }
  Delete(id: string): void {

    //1. ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmeDialogComponent, { });
    //2. attend le resultat
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.MemberService.deleteMemberByID(id).then(() => this.fetchDataSource());
      }
    }
      );

    //3. tester sur le retour
    //4. if(click sur confirm)

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
