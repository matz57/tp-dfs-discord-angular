import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edition-serveur',
  standalone: true,
  imports: [
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './edition-serveur.component.html',
  styleUrl: './edition-serveur.component.scss',
})
export class EditionServeurComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  snackBar: MatSnackBar = inject(MatSnackBar);

  formulaire: FormGroup = this.formBuilder.group({
    nom: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    description: ['', [Validators.maxLength(100)]],
    public: [false, []],
    urlLogo: ['', []],
  });

  onAjoutServeur() {
    if (this.formulaire.valid) {
      this.http
        .post('http://localhost:3000/serveur', this.formulaire.value)
        .subscribe((nouveauServeur) => {
          this.snackBar.open('Le serveur a bien été ajouté', undefined, {
            duration: 3000,
          });

          this.router.navigateByUrl('/principal');
        });
    }
  }
}
