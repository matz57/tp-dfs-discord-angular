// src/app/serveur/serveur.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SalonComponent } from '../salon/salon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-serveur',
  standalone: true,
  imports: [CommonModule, SalonComponent, RouterModule],
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss'],
})
export class ServeurComponent implements OnInit {
  serveurId: string = '';
  serveur: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idServeur = params.get('id_serveur');
      this.serveurId = idServeur !== null ? idServeur : '';
      this.loadServeur();
    });    
  }

  loadServeur(): void {
    if (this.serveurId) {
      this.http.get(`http://localhost:3000/serveur/${this.serveurId}`).subscribe(data => {
        this.serveur = data;
      });
    }
  }
}
