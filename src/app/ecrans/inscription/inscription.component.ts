import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent {
  formBuilder: FormBuilder = inject(FormBuilder);

  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmationPassword: ['', [Validators.required]],
  });

  onInscription() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
    }
  }
}
