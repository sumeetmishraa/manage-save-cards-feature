import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmPopupComponent>, public dialog?: MatDialog) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  ok(){}

  cancel(){
    this.dialog?.closeAll();

  }

}
