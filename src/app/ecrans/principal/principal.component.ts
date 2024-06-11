import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.http
      .get('http://localhost:3000/serveur')
      .subscribe((listeServeur) => console.log(listeServeur));
  }
}
