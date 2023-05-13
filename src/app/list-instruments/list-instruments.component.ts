import { Component, OnInit } from '@angular/core';
import { instrument } from '../model/instruments.model';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-list-instruments',
  templateUrl: './list-instruments.component.html',
})
export class ListInstrumentsComponent implements OnInit {
instr !: instrument[]
  constructor(private instrumentService:InstrumentService) { 
   
  }

  ngOnInit(): void {
    this.instrumentService.listInstrument().subscribe(inst => {
      console.log(inst);
      this.instr = inst;
      });}
    
    supprimerInstr(instr:instrument){
        //console.log(food);
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.instrumentService.supprimerInstr(instr);
      }
  }

