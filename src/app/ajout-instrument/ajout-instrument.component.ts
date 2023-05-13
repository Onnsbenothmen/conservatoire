import { Component, OnInit } from '@angular/core';
import { instrument } from '../model/instruments.model';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-ajout-instrument',
  templateUrl: './ajout-instrument.component.html',
})
export class AjoutInstrumentComponent implements OnInit {
imgURL:any;
public imagePath: any;
public message! : string ;

  newInstrument = new instrument();
  constructor(private instrumentService:InstrumentService) { 
  }
  ngOnInit(): void {
  }
  addInstrument(){
    this.instrumentService.ajoutInstruments(this.newInstrument);
    }

    imageUrl !: string;

    onFileSelected(event: Event): void {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput?.files?.[0];
      if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };}
    }
  
    onSubmit(event: Event): void {
      event.preventDefault();
      // envoyer l'image au serveur
      console.log('Image envoyée : ', this.imageUrl);
    }
  }