import { Injectable } from '@angular/core';
import { SaveCardModel } from '../modal/savecard-model';
@Injectable({
  providedIn: 'root'
})
export class ManageCardService {

  private cardList: SaveCardModel[] = []

  constructor() { }

  addCard(card: SaveCardModel) {
    card.id = new Date().getTime();
    this.cardList.push(card);
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

  getCard() {
    return this.cardList;
  }

  removeCard(id: number) {
    this.cardList = this.cardList.filter((item: any) => {
      return item.id !== id;
    });
  }

  updateLocalStorage() {
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

  checkDuplicateNumber(cardNumber: any) {
    if (cardNumber.length === 19) {
      for (let i = 0; i < this.cardList.length; i++) {
        const val = this.cardList[i]['cardNumber'];
        if (cardNumber == val) {
          return true;
        }
      }
    }
    return false;
  }

  /* === Genreric Methods === */
  noAlphaNumericKey(event: any) {
    return event.charCode >= 48 && event.charCode <= 57;
  }

  cardNumberSpacing(event: any) {
    return event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  maskingCardNumer(cardNo: any) {
    let first4 = cardNo.substring(0, 4);
    let last5 = cardNo.substring(cardNo.length - 5);
    let mask = cardNo.substring(4, cardNo.length - 5).replace(/\d/g, "X");
    return first4 + mask + last5
  }

  validCardNumber(value: any) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (let n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) == 0;
  }

  onPaste(event: any) {
    return false;
  }

  onCopy(event: any) {
    return false;
  }

  onDrag(event: any) {
    return false;
  }

  onDrop(event: any) {
    return false;
  }

  onCut(event: any) {
    return false;
  }
}
