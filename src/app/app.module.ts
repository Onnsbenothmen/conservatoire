import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ListInstrumentsComponent } from './list-instruments/list-instruments.component';
import { FormsModule } from '@angular/forms';
import { AjoutInstrumentComponent } from './ajout-instrument/ajout-instrument.component';
import{ HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InstrumentsComponent,
    ListInstrumentsComponent,
    AjoutInstrumentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
