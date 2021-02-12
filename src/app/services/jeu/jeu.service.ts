import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllJeu();
  }

 jeuSubject = new Subject <any[]>();
 private jeux = [];

  emitJeuSubject() {
    this.jeuSubject.next(this.jeux.slice());
  }
  saveNewJeu(jeu: any) {
    return new Observable(obs => {
      this.db.collection('jeux').add(jeu).then(() => {
        console.log('success');
        obs.next();
      })
    });
  }
  getAllJeu() {
    return this.db.collection('jeux').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
        })
    ).subscribe(res => {
      this.jeux = res;
      this.emitJeuSubject();
    })
  }
  update(jeu: any, id: any) {
    return new Observable(obs => {
      this.db.doc('jeux/' + id).update(jeu);
      obs.next();
    })
  }
  getJeuById(id: any) {
    for ( let i = 0; i < this.jeux.length; i++) {
      if (this.jeux[i].id === id) return this.jeux[i];
    }
  }
  delete(id: any){
    this.db.doc('jeux/' + id).delete();
  }
}
