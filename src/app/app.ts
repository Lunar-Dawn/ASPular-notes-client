import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NoteList } from './note-list/note-list';

@Component({
  selector: 'app-root',
  imports: [
    NoteList,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
