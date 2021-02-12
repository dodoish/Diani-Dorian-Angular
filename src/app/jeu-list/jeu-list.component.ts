import { Component, OnInit } from '@angular/core';
import {JeuService} from '../services/jeu/jeu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-jeu-list',
  templateUrl: './jeu-list.component.html',
  styleUrls: ['./jeu-list.component.css']
})
export class JeuListComponent implements OnInit {
  title = 'jeux';
  jeux: any = [];
  jeuSub: Subscription;

  constructor( private Jeux: JeuService) {

  }

  ngOnInit() {
    this.jeuSub = this.Jeux.jeuSubject.subscribe((list
    ) => {
      this.jeux = list;
    });
    this.Jeux.emitJeuSubject();
  }

}
