import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageCardService } from '../../services/manage-card.service';
import { ERROR_MSG } from '../../enum/common-constant';
@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.scss']
})
export class AddNewCardComponent implements OnInit {

  years = ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"]
  months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

  error: any = {};

  addNewCardForm = new FormGroup({
    cardNumber: new FormControl('', Validators.compose([Validators.required])),
    expireMonth: new FormControl('', Validators.compose([Validators.required])),
    expireYear: new FormControl('', Validators.compose([Validators.required])),
    cvv: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(
    public dialogRef: MatDialogRef<AddNewCardComponent>,
    public srv?: ManageCardService,
    public dialog?: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    this.addNewCardForm.get('cardNumber')?.valueChanges.subscribe(data => {
      console.log('valueChanges cardNumber', data);
      this.error['cardNumberError'] = '';
    })
    this.addNewCardForm.get('expireMonth')?.valueChanges.subscribe(data => {
      this.error['expireMonthError'] = '';
    })
    this.addNewCardForm.get('expireYear')?.valueChanges.subscribe(data => {
      this.error['expireYearError'] = '';
    })
    this.addNewCardForm.get('cvv')?.valueChanges.subscribe(data => {
      this.error['cvvError'] = '';
    })
  }

  onSubmit() {
    const isValidForm = this.validateForm();
    if (isValidForm) {
      this.srv?.addCard(this.addNewCardForm.value);
      this.dialogRef.close();
    }
  }

  validateForm() {
    if (!this.addNewCardForm.value.cardNumber || this.addNewCardForm.value.cardNumber.length < 19) {
      this.error['cardNumberError'] = ERROR_MSG.INVALID_CARD_NUMBER;
      return false;
    }
    else if (!this.addNewCardForm.value.expireMonth || this.addNewCardForm.get('expireMonth')?.status === 'INVALID') {
      this.error['expireMonthError'] = ERROR_MSG.INVALID_MONTH;
      return false;
    }
    else if (!this.addNewCardForm.value.expireYear) {
      this.error['expireYearError'] = ERROR_MSG.INVALID_YEAR;
      return false;

    }
    else if (!this.addNewCardForm.value.cvv || this.addNewCardForm.value.cvv.length < 3) {
      this.error['cvvError'] = ERROR_MSG.INVALID_CVV;
      return false;
    }
    const isDuplicateNumber = this.srv?.checkDuplicateNumber(this.addNewCardForm.value.cardNumber);
    if (isDuplicateNumber) {
      this.error['cardNumberError'] = ERROR_MSG.USED_CARD_NUMBER;
      return false;
    }
    return true;
  }

  isDisable() {
    if (this.addNewCardForm.value.cardNumber.length < 19
      || this.addNewCardForm.value.cvv < 3
      || this.addNewCardForm.get('expireMonth')?.status === 'INVALID'
      || this.addNewCardForm.get('expireYear')?.status === 'INVALID') {
      return true;
    } else {
      return false;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
