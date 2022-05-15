import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageCardService } from '../../services/manage-card.service';
@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupComponent>,
    public dialog?: MatDialog,
    private srv?: ManageCardService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit(): void { }

  submit() {
    const id = this.data?.id_key;
    this.srv?.removeCard(id)
    this.srv?.updateLocalStorage();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close('cancel');

  }

  close() {
    this.dialogRef.close('close');
  }

}
