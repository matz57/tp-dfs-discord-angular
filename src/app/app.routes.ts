import { Routes } from '@angular/router';
import { ConnexionComponent } from './ecrans/connexion/connexion.component';
import { Page404Component } from './ecrans/page404/page404.component';
import { ProfilComponent } from './ecrans/profil/profil.component';
import { PrincipalComponent } from './ecrans/principal/principal.component';
import { EditionServeurComponent } from './ecrans/edition-serveur/edition-serveur.component';
import { InscriptionComponent } from './ecrans/inscription/inscription.component';

export const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'ajout-serveur', component: EditionServeurComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];
