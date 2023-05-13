import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ListInstrumentsComponent } from './list-instruments/list-instruments.component';
import { AjoutInstrumentComponent } from './ajout-instrument/ajout-instrument.component';

const routes: Routes = [
  {path:"",redirectTo:"instruments",pathMatch:"full"},
  {path: "instruments", component: InstrumentsComponent},
  {path: "login", component: LoginComponent},
  {path: "ListInstruments", component: ListInstrumentsComponent},
  {path: "ajoutInstrument", component: AjoutInstrumentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
