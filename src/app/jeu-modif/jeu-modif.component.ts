import { Component, OnInit } from '@angular/core';
import {JeuService} from '../services/jeu/jeu.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jeu-modif',
  templateUrl: './jeu-modif.component.html',
  styleUrls: ['./jeu-modif.component.css']
})
export class JeuModifComponent implements OnInit {
  public jeu: any = {
    NameJeu: null,
    prix: 0,
    jacket: null,
    dateDeSortie: null,
    Studio: null
  };
  public change: boolean;
  public id: string;


  constructor(
    private Jeu: JeuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(  ) {
    const id = this.route.snapshot.params['id'];
    this.id = this.Jeu.getJeuById(id).id;
    this.jeu = this.Jeu.getJeuById(id).data;
  }
  modif(){
    this.Jeu.update(this.jeu, this.id).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000 );
      })
  }

}
