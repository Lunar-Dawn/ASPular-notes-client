import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Sidebar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
