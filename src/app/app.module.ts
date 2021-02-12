import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JeuComponent } from './jeu/jeu.component';
import { JeuModifComponent } from './jeu-modif/jeu-modif.component';
import { JeuNewComponent } from './jeu-new/jeu-new.component';
import { HomeComponent } from './home/home.component';
import { JeuListComponent } from './jeu-list/jeu-list.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {
    path: 'jeux',
    component: JeuListComponent
  },
  {path: 'new',
    component: JeuNewComponent

  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'modif/:id',
    component: JeuModifComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    JeuModifComponent,
    JeuNewComponent,
    HomeComponent,
    JeuListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
