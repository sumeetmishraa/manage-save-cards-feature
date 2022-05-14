import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageCardService } from '../../services/manage-card.service';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.scss']
})
export class AddNewCardComponent implements OnInit {

  years = ["2022", "2023", "2024","2025", "2026", "2027", "2028", "2029"]
  months = ["01","02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

  addNewCardForm = new FormGroup({
    cardNumber: new FormControl('', Validators.compose([Validators.required])),
    expireMonth: new FormControl('', Validators.compose([Validators.required])),
    expireYear: new FormControl('', Validators.compose([Validators.required])),
    cvv: new FormControl('', Validators.compose([Validators.required]))
  });

  cardList:any= [];

  constructor(
    public dialogRef: MatDialogRef<AddNewCardComponent>,
    private srv?: ManageCardService, 
    public dialog?: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {}

  onSubmit() {
    const addCardObj = {
      cardNumber: this.addNewCardForm.value.cardNumber,
      expireMonth: this.addNewCardForm.value.expireMonth,
      expireYear: this.addNewCardForm.value.expireYear,
      cvv: this.addNewCardForm.value.cvv
    }
    if(localStorage.getItem('cardList')){
      this.cardList.push(addCardObj);

    }
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
    // this.srv?.setCardListData(this.cardList);

  }

  close(){
    this.dialogRef.close();
  }




}
