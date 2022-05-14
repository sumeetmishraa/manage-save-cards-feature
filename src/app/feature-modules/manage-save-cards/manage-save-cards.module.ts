import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSaveCardsRoutingModule } from './manage-save-cards-routing.module';
import { SavedCardsComponent } from './components/saved-cards/saved-cards.component';
import { AddNewCardComponent } from './components/add-new-card/add-new-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';






@NgModule({
  declarations: [
    SavedCardsComponent,
    AddNewCardComponent,
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    ManageSaveCardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
    
  ],
  exports:[
    SavedCardsComponent,
    AddNewCardComponent
  ],
  entryComponents:[AddNewCardComponent]

})
export class ManageSaveCardsModule { }
