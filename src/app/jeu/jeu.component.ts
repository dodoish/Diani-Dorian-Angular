import {Component, Input, OnInit} from '@angular/core';
import {JeuService} from '../services/jeu/jeu.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  @Input() public NameJeu: string;
  @Input() public prix: number;
  @Input() public dateDeSortie: string;
  @Input() public Studio: string;
  @Input() public jacket: string;
  @Input() public index: number;
  @Input() public id: string;

  constructor( private Jeux: JeuService )
  { console.log(Jeux);
  }

  ngOnInit() {
  }

  supr() {
    this.Jeux.delete(this.id);
  }
}
