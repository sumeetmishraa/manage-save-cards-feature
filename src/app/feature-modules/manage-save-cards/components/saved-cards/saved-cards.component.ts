import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCardComponent } from '../add-new-card/add-new-card.component'
import { ManageCardService } from '../../services/manage-card.service';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { SaveCardModel } from 'src/app/feature-modules/manage-save-cards/modal/savecard-model';
@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.scss']
})
export class SavedCardsComponent implements OnInit {
  cardList: SaveCardModel[] | any;

  constructor(public dialog?: MatDialog, public srv?: ManageCardService) { }

  ngOnInit() {
    const readLocal = localStorage.getItem('cardList')
    if(readLocal) {
      const localData:any = localStorage.getItem('cardList');
      const parsedData = JSON.parse(localData);
      this.cardList = parsedData;
    } else {
      this.cardList = this.srv?.getCard();
    }
  }

  addNewCard() {
    const dialogRef = this.dialog?.open(AddNewCardComponent,
      {
        width: '450px',
        disableClose: true,
      }
    );
    dialogRef?.afterClosed().subscribe((result: any) => {
      this.cardList = this.srv?.getCard();
    });
  }

  removeCard(id: number) {
    const dialogRef = this.dialog?.open(ConfirmPopupComponent,
      {
        width: '300',
        height: '200px',
        disableClose: true,
        data: { id_key: id }
      }
    );
    dialogRef?.afterClosed().subscribe((result: any) => {
      if(result === 'cancel' || result === 'close'){
        const localData:any = localStorage.getItem('cardList');
        const parsedData = JSON.parse(localData);
        this.cardList = parsedData;
      } else {
        this.cardList = this.srv?.getCard();
      }
    });

  }

}
