import { Injectable } from '@angular/core';
import { instrument } from '../model/instruments.model';
import{Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions={
  headres : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments !: instrument[]
  image = 'assets/piano.avif';
  apiURL :string ='http://localhost:6000/cons/api';
    constructor(private http : HttpClient) { 

    }

    listInstrument(): Observable<instrument[]>{
      return this.http.get<instrument[]>(this.apiURL);


    }
    ajoutInstruments(instrument:instrument){
      this.instruments.push(instrument);
    }
    supprimerInstr( instr : instrument){
      const index = this.instruments.indexOf(instr, 0);
      if (index > -1) {
      this.instruments.splice(index, 1);
      }
      
      }

    }
  