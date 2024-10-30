import { Component } from '@angular/core';
import { LoginComponent } from "../pages/login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
