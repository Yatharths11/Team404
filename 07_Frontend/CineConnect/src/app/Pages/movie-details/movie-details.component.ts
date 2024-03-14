import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  
}
