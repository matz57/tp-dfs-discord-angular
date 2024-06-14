import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from './salon.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-salon',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss'],
})
export class SalonComponent implements OnInit {
  @Input() serveurId!: string;
  salons: any[] = [];
  formulaire: FormGroup;

  constructor(
    private salonService: SalonService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.formulaire = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
    });
  }

  ngOnInit(): void {
    if (this.serveurId) {
      this.loadSalons();
    } else {
      this.route.paramMap.subscribe(params => {
        this.serveurId = params.get('id_serveur')!;
        this.loadSalons();
      });
    }
  }

  loadSalons(): void {
    this.salonService.getSalonsByServeurId(this.serveurId).subscribe(data => {
      this.salons = data;
    });
  }

  onAjoutSalon(): void {
    if (this.formulaire.valid) {
      const salonData = { ...this.formulaire.value, serveurId: this.serveurId };
      this.salonService.createSalon(salonData).subscribe(() => {
        this.loadSalons();
        this.formulaire.reset();
      });
    }
  }
}