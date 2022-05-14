import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewCardComponent } from '../add-new-card/add-new-card.component'
import { ManageCardService } from '../../services/manage-card.service';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.scss']
})
export class SavedCardsComponent implements OnInit {
  cardDetails:any;

  constructor(
    public dialog?: MatDialog, 
    private srv?: ManageCardService
  ) { }

  ngOnInit() {
    if( localStorage.getItem('cardList')){
      this.cardDetails = localStorage.getItem('cardList');
    }
  }

  addNewCard(){
    const dialogRef = this.dialog?.open(AddNewCardComponent,
      {
        width: '600px',
        height:'600px',
        disableClose: true,
        data:{key: ''}
      }
    );
    dialogRef?.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

  removeCard(){
    const dialogRef = this.dialog?.open(ConfirmPopupComponent,
      {
        width: '300',
        height:'200px',
        disableClose: true
      }
    );
    dialogRef?.afterClosed().subscribe((result: any) => {
      console.log(result);
    });

  }

}
