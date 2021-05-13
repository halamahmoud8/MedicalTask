import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { MedicalDataRoutingModule } from './medical-data-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [HomePageComponent, PatientDataComponent, PageHeaderComponent, PageFooterComponent],
  imports: [
    CommonModule,
    MedicalDataRoutingModule,MatInputModule,MatSelectModule,MatRadioModule,MatButtonModule
  ]
})
export class MedicalDataModule { }
