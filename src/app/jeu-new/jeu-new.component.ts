import { Component, OnInit } from '@angular/core';
import {JeuService} from '../services/jeu/jeu.service';

@Component({
  selector: 'app-jeu-new',
  templateUrl: './jeu-new.component.html',
  styleUrls: ['./jeu-new.component.css']
})
export class JeuNewComponent implements OnInit {
  public jeu: any = {
    NameJeu: null,
    prix: 0,
    jacket: null,
    dateDeSortie: null,
    Studio: null
  };

  constructor( private Jeu: JeuService) {}

  ngOnInit() {
  }
  add() {
    this.Jeu.saveNewJeu(this.jeu).subscribe(() => {
      this.jeu = {
        NameJeu: null,
        prix: 0,
        jacket: null,
        dateDeSortie: null,
        Studio: null
      }
    })
  }

}
