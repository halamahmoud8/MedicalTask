import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientDataComponent } from './patient-data/patient-data.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'details', component: PatientDataComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalDataRoutingModule { }
