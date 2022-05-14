import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageCardService {
  listData: any;
  cardList = [];

  constructor() { }

  setCardListData(data:any){
    this.cardList.push();
  }

  getCardListData(){
    return this.listData;
  }
}
