import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirme-dialog',
  templateUrl: './confirme-dialog.component.html',
  styleUrls: ['./confirme-dialog.component.scss']
})
export class ConfirmeDialogComponent implements OnInit {
  title = "Are you sure ?";
  message = "Do you really want to remove this item ? ";
  confirm = "confirm";
  cancel = "cancel";
  constructor(public dialogRef: MatDialogRef<ConfirmeDialogComponent>) { }


  ngOnInit(): void {
  }

}
