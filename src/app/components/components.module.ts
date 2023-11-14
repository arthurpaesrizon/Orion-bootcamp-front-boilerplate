import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CharacterCardComponent } from './character-card/character-card.component';
import { RatingComponent } from './rating/rating.component';
import { RatingApi } from '../core/api/app/rating.api';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    SelectComponent,
    CharacterCardComponent,
    RatingComponent,
    PasswordCheckerComponent,
  ],
  imports: [CommonModule, MatIconModule, FormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    SelectComponent,
    CharacterCardComponent,
    RatingComponent,
    PasswordCheckerComponent,
  ],
  providers: [RatingApi],
})
export class ComponentsModule {}
