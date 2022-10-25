import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicIslandComponent } from './dynamic-island.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DynamicIslandComponent],
  exports: [DynamicIslandComponent]
})
export class DynamicIslandComponentModule {}
