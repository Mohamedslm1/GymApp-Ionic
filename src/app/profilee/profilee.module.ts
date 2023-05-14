import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileePageRoutingModule } from './profilee-routing.module';

import { ProfileePage } from './profilee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileePageRoutingModule
  ],
  declarations: [ProfileePage]
})
export class ProfileePageModule {}
